/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  SprocketTabs,
  TabList as SprocketTabList,
  TabPanels as SprocketTabPanels,
  TabPanel as SprocketTabPanel,
  SelectionIndicator as SprocketSelectionIndicator,
} from '@sprocketui-react/tabs';
import cn from 'clsx';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { Tab } from '../Tab';
import { TABS_DEFAULT_NAME } from '../../constants';

import type { TabsProps } from './Tabs.types';
import type { TabComponentProps } from '../Tab/Tab.types';
import type { ReactNode, ReactElement, ForwardedRef } from 'react';

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    props: TabsProps,
    ref: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const {
      tabs,
      variant,
      selected,
      onSelect,
      children,
      isDisabled,
      orientation = 'horizontal',
    } = props;

    const tabElements: ReactElement<TabComponentProps>[] = [];
    const contentElements: ReactNode[] = [];

    Children.forEach(children, (child) =>
      isValidElement<TabComponentProps>(child) && child.type === Tab
        ? tabElements.push(child)
        : contentElements.push(child)
    );

    const renderedTabs = tabs
      ? tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            isSelected={selected === tab.id}
            isDisabled={isDisabled || tab.isDisabled}
            variant={variant}
            badge={tab.badge}
            onSelect={() => onSelect?.(tab.id)}
          >
            {tab.content}
          </Tab>
        ))
      : tabElements.map((child) =>
          cloneElement(child, {
            variant,
            isSelected: selected === child.props.id,
            isDisabled: isDisabled || child.props.isDisabled,
            onSelect: () => onSelect?.(child.props.id),
          })
        );

    return (
      <SprocketTabs.Root
        ref={ref}
        selectedValue={selected}
        onSelectionChange={onSelect ? (value) => onSelect(String(value)) : undefined}
        orientation={orientation}
        isDisabled={isDisabled}
        className={cn('DracoTabs', variant === 'underline' && 'DracoTabs--Underline')}
      >
        <SprocketTabList.Root className="DracoTabs__List" as="ul">
          {renderedTabs}

          {variant === 'underline' && (
            <SprocketSelectionIndicator.Root className="DracoTabs__SelectionIndicator" />
          )}

          {contentElements.length > 0 && (
            <SprocketTabPanels.Root className="DracoTabs__Content">
              <SprocketTabPanel.Root value={selected} forceMount>
                {contentElements}
              </SprocketTabPanel.Root>
            </SprocketTabPanels.Root>
          )}
        </SprocketTabList.Root>
      </SprocketTabs.Root>
    );
  }
);

Tabs.displayName = TABS_DEFAULT_NAME;
