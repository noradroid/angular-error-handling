import { Uuid } from './types';

export interface Toast {
  id: Uuid;
  text: string;
  timeout?: Timeout;
}

export type Timeout = any;

export interface Options {
  autoClose?: boolean;
  duration?: number; // ms
}
