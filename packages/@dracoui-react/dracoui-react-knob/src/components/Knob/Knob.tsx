/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { forwardRef, useRef, useState } from 'react';

import type { KnobProps, KnobSize } from './Knob.types';
import type {
  CSSProperties,
  ForwardedRef,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  ReactElement,
} from 'react';

const SIZE_CLASS: Record<KnobSize, string> = {
  small: 'DracoKnob--Small',
  medium: 'DracoKnob--Medium',
  large: 'DracoKnob--Large',
};

// The dial sweeps 270°, from -135° (min) to +135° (max).
const SWEEP = 270;
const START = -135;
// Pixels of vertical drag for a full min→max travel.
const DRAG_RANGE_PX = 160;

const clamp = (v: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, v));

const roundToStep = (v: number, step: number, min: number): number => {
  if (step <= 0) return v;
  return min + Math.round((v - min) / step) * step;
};

export const Knob = forwardRef<HTMLDivElement, KnobProps>(
  (props: KnobProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const {
      value,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
      size = 'medium',
      onChange,
      showTicks = true,
      tickCount = 41,
      showNumbers = false,
      showValue = false,
      disabled = false,
      className,
      'aria-label': ariaLabel,
    } = props;

    const isControlled = value !== undefined;
    const [internal, setInternal] = useState<number>(defaultValue);
    const current = clamp(isControlled ? (value as number) : internal, min, max);

    const span = max - min || 1;
    const ratio = (current - min) / span;
    const angle = START + ratio * SWEEP;

    const drag = useRef<{ startY: number; startVal: number } | null>(null);

    const commit = (next: number): void => {
      const nv = clamp(roundToStep(next, step, min), min, max);
      if (!isControlled) setInternal(nv);
      onChange?.(nv);
    };

    const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>): void => {
      if (disabled) return;
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      drag.current = { startY: e.clientY, startVal: current };
    };

    const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>): void => {
      if (!drag.current) return;
      const dy = drag.current.startY - e.clientY; // dragging up increases
      commit(drag.current.startVal + (dy / DRAG_RANGE_PX) * span);
    };

    const endDrag = (e: ReactPointerEvent<HTMLDivElement>): void => {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
      drag.current = null;
    };

    const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>): void => {
      if (disabled) return;
      const big = Math.max(step, span / 10);
      let next = current;
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowRight':
          next = current + step;
          break;
        case 'ArrowDown':
        case 'ArrowLeft':
          next = current - step;
          break;
        case 'PageUp':
          next = current + big;
          break;
        case 'PageDown':
          next = current - big;
          break;
        case 'Home':
          next = min;
          break;
        case 'End':
          next = max;
          break;
        default:
          return;
      }
      e.preventDefault();
      commit(next);
    };

    const majorEvery = Math.max(1, Math.round((tickCount - 1) / 10));

    return (
      <div
        className={cn('DracoKnob', SIZE_CLASS[size], disabled && 'DracoKnob--Disabled', className)}
      >
        {showTicks && (
          <div className="DracoKnob__Ticks" aria-hidden="true">
            {Array.from({ length: tickCount }, (_, i) => {
              const t = i / (tickCount - 1);
              const a = START + t * SWEEP;
              const isMajor = i % majorEvery === 0;
              const isActive = t <= ratio + 1e-6;
              return (
                <span
                  key={i}
                  className={cn(
                    'DracoKnob__Tick',
                    isMajor && 'DracoKnob__Tick--Major',
                    isActive && 'DracoKnob__Tick--Active'
                  )}
                  style={{ '--a': `${a}deg` } as CSSProperties}
                />
              );
            })}
          </div>
        )}

        {showNumbers && (
          <div className="DracoKnob__Numbers" aria-hidden="true">
            {Array.from({ length: 11 }, (_, n) => {
              const a = START + (n / 10) * SWEEP;
              return (
                <span
                  key={n}
                  className="DracoKnob__Number"
                  style={{ '--a': `${a}deg` } as CSSProperties}
                >
                  <span className="DracoKnob__NumberText">{n}</span>
                </span>
              );
            })}
          </div>
        )}

        <div
          ref={ref}
          className="DracoKnob__Dial"
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuenow={Math.round(current)}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={ariaLabel}
          aria-disabled={disabled || undefined}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={handleKeyDown}
        >
          <div className="DracoKnob__Grip" />
          <div className="DracoKnob__Indicator" style={{ transform: `rotate(${angle}deg)` }} />
          {showValue && <div className="DracoKnob__Value">{Math.round(current)}</div>}
        </div>
      </div>
    );
  }
);

Knob.displayName = 'Knob';
