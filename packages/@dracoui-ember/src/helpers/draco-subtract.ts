import { helper } from '@ember/component/helper';

export function darcoSubtract([a, b]) {
  return a - b;
}

const dracoSubtractHelper = helper(darcoSubtract);
export default dracoSubtractHelper;