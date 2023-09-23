import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options, Timeout, Toast } from './toast.model';
import { generateUuid } from './uuid.utils';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  private TIMEOUT_MS = 4000;
  private toasts = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toasts.asObservable();

  constructor() {}

  /**
   * Open a standard white info toast.
   *
   * @param text text to display
   * @param autoClose default true
   * @returns created toast
   */
  public info(text: string, options?: Options): Toast {
    return this.addToast({ text, id: generateUuid() }, options);
  }

  public remove(toast: Toast): void {
    this.removeToast(toast);
  }

  addToast(toast: Toast, options?: Options): Toast {
    const compose = {
      ...toast,
      timeout: !options || options.autoClose ? this.createTimeout(toast) : null,
    };
    const toasts = this.toasts.getValue();
    toasts.push(compose);
    this.toasts.next(toasts);
    return compose;
  }

  removeToast(toast: Toast): void {
    const toasts = this.toasts.getValue();
    const idx: number = toasts.findIndex((t) => t.id === toast.id);
    if (idx >= 0) {
      this.deleteTimeout(toasts[idx]);
      toasts.splice(idx, 1);
    }
    this.toasts.next(toasts);
  }

  private createTimeout(
    toast: Toast,
    duration: number = this.TIMEOUT_MS
  ): Timeout {
    return setTimeout(() => {
      this.removeToast(toast);
    }, duration);
  }

  private deleteTimeout(timeout: any): void {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}
