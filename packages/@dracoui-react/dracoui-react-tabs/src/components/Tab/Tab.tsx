/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cn from 'clsx';
import { defu } from 'defu';
import { Fragment, forwardRef } from 'react';
import { SprocketTab } from '@sprocketui-react/tabs';
import { SprocketButton } from '@sprocketui-react/button';

import { tabVariants } from './Tab.styles';
import { TABS_DEFAULT_PROPS } from '../../constants';

import type { TabComponentProps } from './Tab.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Tab = forwardRef<HTMLButtonElement, TabComponentProps & VariantProps<typeof tabVariants>>(
  (
    props: TabComponentProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): ReactElement => {
    const {
      id,
      badge,
      variant,
      children,
      isSelected,
      isDisabled,
      onSelect,
      ...others
    } = defu(props, TABS_DEFAULT_PROPS ?? {}) as typeof props;

    return (
      <SprocketTab.Root
        as="li"
        value={id}
        isDisabled={isDisabled}
        className="DracoTab__Container"
        {...others}
      >
        {(tabRenderProps): ReactElement => (
          <Fragment>
            <SprocketButton.Root
              ref={ref}
              className={(renderProps) =>
                cn(
                  tabVariants({
                    variant,
                    isSelected: tabRenderProps.isSelected,
                    isDisabled: renderProps.isDisabled,
                  })
                )
              }
            >
              {children}
            </SprocketButton.Root>

            {badge && (
              <span className="DracoTab__Badge">{badge}</span>
            )}
          </Fragment>
        )}
      </SprocketTab.Root>
    );
  }
);

Tab.displayName = 'Tab';
