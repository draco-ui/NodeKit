import { helper } from '@ember/component/helper';

export function dracoLinkToQuery([query]: [
  Record<string, string> | undefined,
]): Record<string, string> {
  return query ?? {};
}

const dracoLinkToQueryHelper = helper(dracoLinkToQuery);
export default dracoLinkToQueryHelper;