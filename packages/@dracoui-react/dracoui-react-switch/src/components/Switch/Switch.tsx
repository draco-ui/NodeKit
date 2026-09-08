/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { forwardRef, useState } from 'react';

import type { SwitchProps, SwitchSize } from './Switch.types';
import type { ChangeEvent, ForwardedRef, ReactElement } from 'react';

const SIZE_CLASS: Record<SwitchSize, string> = {
  small: 'DracoSwitch--Small',
  medium: 'DracoSwitch--Medium',
  large: 'DracoSwitch--Large',
};

/**
 * A physical flip / rocker style switch (rendered sideways). Toggles like a
 * checkbox with `role="switch"`, and works either controlled (`checked`) or
 * uncontrolled (`defaultChecked`).
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props: SwitchProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => {
    const {
      checked,
      defaultChecked = false,
      disabled = false,
      size = 'medium',
      orientation = 'horizontal',
      offLabel = 'OFF',
      onLabel = 'ON',
      onChange,
      label,
      className,
      name,
      value,
      'aria-label': ariaLabel,
    } = props;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const next = event.target.checked;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    };

    return (
      <label
        className={cn(
          'DracoSwitch',
          SIZE_CLASS[size],
          orientation === 'vertical' && 'DracoSwitch--Vertical',
          isChecked && 'DracoSwitch--Checked',
          disabled && 'DracoSwitch--Disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="DracoSwitch__Input"
          checked={isChecked}
          disabled={disabled}
          name={name}
          value={value}
          aria-label={ariaLabel}
          aria-checked={isChecked}
          onChange={handleChange}
        />
        <span className="DracoSwitch__Frame" aria-hidden="true">
          <span className="DracoSwitch__Toggle">
            <span className="DracoSwitch__Left">{offLabel}</span>
            <span className="DracoSwitch__Right">{onLabel}</span>
          </span>
        </span>
        {label && <span className="DracoSwitch__Label">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
