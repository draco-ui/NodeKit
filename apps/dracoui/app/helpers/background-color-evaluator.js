import { helper } from '@ember/component/helper';
import tinycolor from 'tinycolor2';

export default helper(function backgroundColorEvaluator([backgroundColor]) {
  let color = tinycolor(backgroundColor);

  if (!color.isValid()) {
    return {
      contrast: 'black',
    };
  }

  let recommendedContrast = color.isLight() ? '#000' : '#E4E4E7';

  return {
    contrast: recommendedContrast,
  };
});
