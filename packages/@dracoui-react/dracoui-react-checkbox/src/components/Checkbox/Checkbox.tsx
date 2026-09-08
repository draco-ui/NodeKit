/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { forwardRef, useEffect, useRef } from 'react';

import type { CheckboxProps } from './Checkbox.types';
import type { ForwardedRef, ReactElement } from 'react';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    props: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
    const {
      checked = false,
      indeterminate = false,
      disabled = false,
      onChange,
      label,
      helpText,
      error = false,
      className,
      name,
      value,
      'aria-label': ariaLabel,
    } = props;

    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as any) || internalRef;

    useEffect(() => {
      const el = typeof inputRef === 'function' ? null : inputRef.current;
      if (el) el.indeterminate = indeterminate;
    }, [indeterminate, inputRef]);

    return (
      <label
        className={cn(
          'DracoCheckbox',
          disabled && 'DracoCheckbox--Disabled',
          error && 'DracoCheckbox--Error',
          className
        )}
      >
        <span className="DracoCheckbox__InputWrapper">
          <input
            ref={inputRef}
            type="checkbox"
            className="DracoCheckbox__Input"
            checked={checked}
            disabled={disabled}
            name={name}
            value={value}
            aria-label={ariaLabel}
            aria-checked={indeterminate ? 'mixed' : checked}
            aria-invalid={error || undefined}
            onChange={(e) => onChange?.(e.target.checked)}
          />
          <span className="DracoCheckbox__Backdrop" />
          <span className="DracoCheckbox__Icon">
            {indeterminate ? (
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : checked ? (
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </span>
        </span>
        {(label || helpText) && (
          <span className="DracoCheckbox__LabelWrapper">
            {label && <span className="DracoCheckbox__Label">{label}</span>}
            {helpText && <span className="DracoCheckbox__HelpText">{helpText}</span>}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
