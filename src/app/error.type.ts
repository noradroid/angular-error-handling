export const ErrorTypes = [
  'throw',
  '400',
  '401',
  '403',
  '404',
  '409',
  '500',
  '502',
  '503',
] as const;

export type ErrorType = (typeof ErrorTypes)[number];
