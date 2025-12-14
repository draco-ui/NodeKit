import cn from 'clsx';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';
import { ButtonVariantValues, ButtonSizeValues, ButtonShapeValues } from '@dracoui/types';

import { Button } from '../Button';
import { buttonVariants } from '../Button/Button.styles';
import { splitButtonVariants } from './SplitButton.styles';
import { SPLIT_BUTTON_DEFAULT_PROPS, SPLITBUTTON_DEFAULT_NAME } from './SplitButton.constants';

import type { FC, ReactElement, ForwardedRef } from 'react';
import type { SplitButtonProps } from './SplitButton.types';
import type { VariantProps } from 'class-variance-authority';

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps & VariantProps<typeof splitButtonVariants>>(
  (props: SplitButtonProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const {
      variant = SPLIT_BUTTON_DEFAULT_PROPS.variant,
      size = SPLIT_BUTTON_DEFAULT_PROPS.size,
      shape = SPLIT_BUTTON_DEFAULT_PROPS.shape,
      depth = SPLIT_BUTTON_DEFAULT_PROPS.depth,
      depthDirection = SPLIT_BUTTON_DEFAULT_PROPS.depthDirection,
      children,
      className,
      primaryActionButton,
      menuButton,
      disabled,
    } = props;

    return (
      <div
        ref={ref}
        className={cn(splitButtonVariants({ variant, size, shape, depth, depthDirection }), className)}
      >
        <Button
          {...primaryActionButton}
          variant={variant}
          size={size}
          shape={shape}
          depth={depth}
          depthDirection={depthDirection}
          disabled={disabled || primaryActionButton?.disabled}
          className={cn('draco-split-button__primary', primaryActionButton?.className)}
        >
          {children}
        </Button>
        <button
          type="button"
          {...menuButton}
          disabled={disabled || menuButton?.disabled}
          className={cn(
            buttonVariants({ variant, size, shape, depth, depthDirection, iconOnly: true }),
            'draco-split-button__menu',
            menuButton?.className
          )}
        >
          <ChevronDown size={12} strokeWidth={2} />
        </button>
      </div>
    );
  }
);

(SplitButton as FC).displayName = SPLITBUTTON_DEFAULT_NAME;

(SplitButton as FC).propTypes = {
  // Text/content for the primary action button
  children: PropTypes.node,

  // Visual style variant of the split button
  variant: PropTypes.oneOf(Object.values(ButtonVariantValues)),

  // Size of the split button (affects padding and font size)
  size: PropTypes.oneOf(Object.values(ButtonSizeValues)),

  // Border radius style of the split button
  shape: PropTypes.oneOf(Object.values(ButtonShapeValues)),

  // Whether the split button has a 3D depth/shadow effect
  depth: PropTypes.bool,

  // Direction of the depth shadow
  depthDirection: PropTypes.oneOf(['right', 'center']),

  // Whether the split button is disabled
  disabled: PropTypes.bool,

  // Props for the primary action button (left side)
  primaryActionButton: PropTypes.object,

  // Props for the menu trigger button (right side) - receives trigger props from DialogTrigger
  menuButton: PropTypes.object,

  // Additional CSS classes to apply to the container
  className: PropTypes.string,
};
