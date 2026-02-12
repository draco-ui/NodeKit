import { helper } from '@ember/component/helper';

export function darcoEq([a, b]) {
  return a === b;
}

const dracoEqHelper = helper(darcoEq);
export default dracoEqHelper;