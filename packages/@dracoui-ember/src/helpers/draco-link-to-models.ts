import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

export function dracoLinkToModels<T>([model, models]: [
  T | undefined,
  T[] | undefined,
]) {
  assert(
    'You cannot provide both the `@model` and `@models` arguments to the component.',
    !model || !models
  );

  if (model) {
    return [model];
  } else if (models) {
    return models;
  } else {
    return [];
  }
}

const dracoLinkToModelsHelper = helper(dracoLinkToModels);
export default dracoLinkToModelsHelper;