import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export function dracoAssert([message, condition]) {
  assert(message, condition);
  return true;
}

const dracoAssertHelper = helper(dracoAssert);
export default dracoAssertHelper;