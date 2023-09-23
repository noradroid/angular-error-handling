import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Timeout, Toast } from './toast.model';
import { ToastsService } from './toasts.service';

@Component({
  selector: 'toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
})
export class ToastsComponent {
  toasts$: Observable<Toast[]> = this.service.toasts$;
  // toasts$: Observable<Toast[]> = of(this.toasts);
  timeouts: Timeout[] = [];

  constructor(public service: ToastsService) {}
}
