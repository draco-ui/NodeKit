import { helper } from '@ember/component/helper';

export function dracoTypeof([value]: any) {
  return typeof value;
}

const dracoTypeofHelper = helper(dracoTypeof);
export default dracoTypeofHelper;