/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cn from 'clsx';
import { forwardRef, useId, cloneElement, isValidElement } from 'react';

import type { FieldProps, FieldControlProps } from './Field.types';
import type { ForwardedRef, ReactElement } from 'react';

const FIELD_DEFAULT_NAME = 'Field';

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (props, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const {
      label,
      hint,
      validationMessage,
      validationMessageIcon,
      children,
      orientation = 'vertical',
      validationState = validationMessage ? 'error' : 'none',
      required = false,
      size = 'medium',
      className,
      ...others
    } = props;

    const fieldId = useId();
    const labelId = label ? `${fieldId}-label` : undefined;
    const hintId = hint ? `${fieldId}-hint` : undefined;
    const validationMessageId = validationMessage ? `${fieldId}-validation` : undefined;

    // Build aria-describedby from hint and validationMessage
    const describedBy = [hintId, validationMessageId].filter(Boolean).join(' ') || undefined;

    // Props to pass to the child control
    const controlProps: FieldControlProps = {
      id: fieldId,
      'aria-labelledby': labelId,
      'aria-describedby': describedBy,
      'aria-invalid': validationState === 'error' ? true : undefined,
      'aria-required': required ? true : undefined,
    };

    // Render the child with control props
    const renderChild = () => {
      if (typeof children === 'function') {
        return children(controlProps);
      }

      if (isValidElement(children)) {
        return cloneElement(children, controlProps as any);
      }

      return children;
    };

    // Get validation icon based on state
    const getValidationIcon = () => {
      if (validationMessageIcon) {
        return validationMessageIcon;
      }

      // You can add default icons here based on validationState
      // For now, return null and let consumers provide icons
      return null;
    };

    return (
      <div
        ref={ref}
        className={cn(
          'draco-field',
          `draco-field--${orientation}`,
          `draco-field--${size}`,
          validationState !== 'none' && `draco-field--${validationState}`,
          className
        )}
        {...others}
      >
        {label && (
          <label
            id={labelId}
            htmlFor={fieldId}
            className={cn('draco-field__label', required && 'draco-field__label--required')}
          >
            {label}
            {required && <span className="draco-field__required-indicator"> *</span>}
          </label>
        )}

        <div className="draco-field__control">
          {renderChild()}
        </div>

        {hint && !validationMessage && (
          <div id={hintId} className="draco-field__hint">
            {hint}
          </div>
        )}

        {validationMessage && (
          <div
            id={validationMessageId}
            className={cn('draco-field__validation-message', `draco-field__validation-message--${validationState}`)}
            role={validationState === 'error' || validationState === 'warning' ? 'alert' : undefined}
          >
            {getValidationIcon() && (
              <span className="draco-field__validation-icon">
                {getValidationIcon()}
              </span>
            )}
            {validationMessage}
          </div>
        )}
      </div>
    );
  }
);

Field.displayName = FIELD_DEFAULT_NAME;
