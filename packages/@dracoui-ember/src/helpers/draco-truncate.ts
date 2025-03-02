import { helper } from '@ember/component/helper';
import { htmlSafe, SafeString } from '@ember/template';

export function dracoTruncate([str, len]: [string, number]): string | SafeString {
  if (typeof str !== 'string') {
    return str;
  }

  if (str.length > len) {
    let newStr = str.substr(0, len + 1);

    while (newStr.length) {
      let ch = newStr.slice(-1);
      newStr = newStr.slice(0, -1);
      if (ch === ' ') {
        break;
      }
    }

    if (!newStr) {
      newStr = str.substr(0, len);
    }

    return htmlSafe(newStr + '...');
  }

  return str;
}

const dracoTruncateHelper = helper(dracoTruncate);
export default dracoTruncateHelper;
