import cn from 'clsx';
import { defu } from 'defu';
import { Ring } from 'ldrs/react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Primitive } from '@necto-react/components';
import { Button as AriaButton } from 'react-aria-components';
import { ButtonVariantValues, ButtonSizeValues, ButtonShapeValues } from '@dracoui/types';

import { buttonVariants } from './Button.styles';
import { BUTTON_DEFAULT_PROPS, BUTTON_DEFAULT_NAME } from './Button.constants';

import type { ButtonProps } from './Button.types';
import type { FC, ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Button = forwardRef<HTMLButtonElement, ButtonProps & VariantProps<typeof buttonVariants>>(
  (
    props: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): ReactElement => {
    const {
      variant,
      size,
      shape,
      elevated,
      fullWidth,
      loading,
      iconOnly,
      asChild,
      children,
      className,
      disabled,
      ...others
    } = defu(props, BUTTON_DEFAULT_PROPS);

    const buttonClasses = cn(buttonVariants({ variant, size, shape, fullWidth, loading, elevated, iconOnly }), className);

    return (
      <Primitive
        as={AriaButton}
        asChild={asChild}
        ref={ref}
        className={buttonClasses}
        isDisabled={!asChild ? (disabled || loading || undefined) : undefined}
        {...others}
      >
        {loading ? (
          <Ring
            size="10"
            stroke="1"
            bgOpacity="0"
            speed="2"
            color="black"
          />
        ) : (
          children
        )}
      </Primitive>
    );
  }
);

(Button as FC).displayName = BUTTON_DEFAULT_NAME;

(Button as FC).propTypes = {
  // Button content (text, icons, or any React nodes)
  children: PropTypes.node,

  // Visual style variant of the button
  variant: PropTypes.oneOf(Object.values(ButtonVariantValues)),

  // Size of the button (affects padding and font size)
  size: PropTypes.oneOf(Object.values(ButtonSizeValues)),

  // Border radius style of the button
  shape: PropTypes.oneOf(Object.values(ButtonShapeValues)),

  // Whether the button has a shadow/elevation effect
  elevated: PropTypes.bool,

  // Whether the button takes full width of its container
  fullWidth: PropTypes.bool,

  // Whether the button shows a loading spinner
  loading: PropTypes.bool,

  // Whether the button is disabled and non-interactive
  disabled: PropTypes.bool,

  // Whether the button only displays an icon without text
  iconOnly: PropTypes.bool,

  // Changes the component to a Slot, merging its props with the child element
  asChild: PropTypes.bool,

  // Additional CSS classes to apply to the button
  className: PropTypes.string,

  // Emotion CSS prop for custom styling
  css: PropTypes.object,

  // Handler called when the button is clicked
  onClick: PropTypes.func,

  // Handler called when the button receives focus
  onFocus: PropTypes.func,

  // Handler called when the button loses focus
  onBlur: PropTypes.func,
};