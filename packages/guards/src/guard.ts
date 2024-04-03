import { isEmpty } from './is-empty.guard.js';

export class Guard {
  static isEmpty = (value: unknown) => isEmpty(value);
}
