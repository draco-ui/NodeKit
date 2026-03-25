/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef } from 'react';

import { GlobalNavContext } from '../../contexts/GlobalNav';
import { Section } from '../Section';
import { Item } from '../Item';

import type { ForwardedRef, ReactElement } from 'react';
import type { GlobalNavProps } from './GlobalNav.types';

const GlobalNavRoot = forwardRef<HTMLElement, GlobalNavProps>(
  (
    { location, ariaLabelledBy, children, className, ...others }: GlobalNavProps,
    ref: ForwardedRef<HTMLElement>
  ): ReactElement => {
    return (
      <GlobalNavContext.Provider value={{ location }}>
        <nav
          ref={ref}
          className={`DracoGlobalNav${className ? ` ${className}` : ''}`}
          aria-labelledby={ariaLabelledBy}
          {...others}
        >
          {children}
        </nav>
      </GlobalNavContext.Provider>
    );
  }
);

GlobalNavRoot.displayName = 'GlobalNav';

export const GlobalNav = Object.assign(GlobalNavRoot, {
  Section,
  Item,
});
