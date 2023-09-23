import { Uuid } from './types';

export const generateUuid = (): Uuid => {
  return crypto.randomUUID();
};
