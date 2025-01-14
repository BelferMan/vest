import bindNot from 'bindNot';
import { isStringValue as isString } from 'isStringValue';

export function startsWith(value: string, arg1: string): boolean {
  return isString(value) && isString(arg1) && value.startsWith(arg1);
}

export const doesNotStartWith = bindNot(startsWith);
