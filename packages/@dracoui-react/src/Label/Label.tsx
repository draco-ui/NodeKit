/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from 'react';
import { Label as SprocketLabel } from '@sprocketui/react';
import { LABEL_NAME, LABEL_CLASS_NAME } from './constants';
import { getLabelStyles } from './Label.styles';
import type { LabelProps } from './Label.types';
import type { ForwardedRef } from 'react';

const LabelComponent = (
  { size, weight, disabled, required, className, css: customCss, ...props }: LabelProps,
  ref: ForwardedRef<HTMLLabelElement>
) => {
  const labelStyles = getLabelStyles(size, weight, disabled, required);
  const combinedClassName = `${LABEL_CLASS_NAME} ${className || ''}`.trim();

  return (
    <SprocketLabel.Root
      ref={ref}
      className={combinedClassName}
      css={[labelStyles, customCss]}
      {...props}
    />
  );
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(LabelComponent);

Label.displayName = LABEL_NAME;
