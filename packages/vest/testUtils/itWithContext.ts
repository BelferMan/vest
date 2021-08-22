import optionalFunctionValue from 'optionalFunctionValue';

import runCreateRef from './runCreateRef';

import context from 'ctx';

// eslint-disable-next-line jest/no-export
export default function itWithContext(
  str: string,
  cb: () => void,
  getCTX?: () => Record<string, any>
): void {
  return it(str, () =>
    context.run(
      optionalFunctionValue(getCTX) ?? { stateRef: runCreateRef() },
      cb
    )
  );
}
