/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { GlobalNavContext } from '../../contexts/GlobalNav';

import type { ReactElement } from 'react';
import type { GlobalNavItemProps, SubNavigationItem } from './Item.types';

export function Item({ url, label, icon, badge, selected, disabled, new: isNew, subNavigationItems, onClick }: GlobalNavItemProps): ReactElement {
  const { location } = useContext(GlobalNavContext);
  const isActive = selected ?? (url ? location === url : false);

  return (
    <li className="DracoGlobalNav__Item">
      <a
        href={url}
        className={`DracoGlobalNav__ItemLink${isActive ? ' DracoGlobalNav__ItemLink--Active' : ''}${disabled ? ' DracoGlobalNav__ItemLink--Disabled' : ''}`}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        onClick={onClick}
      >
        {icon && <span className="DracoGlobalNav__ItemIcon">{icon}</span>}
        <span className="DracoGlobalNav__ItemLabel">{label}</span>
        {isNew && <span className="DracoGlobalNav__ItemBadge DracoGlobalNav__ItemBadge--New" />}
        {badge != null && <span className="DracoGlobalNav__ItemBadge">{badge}</span>}
      </a>

      {subNavigationItems && subNavigationItems.length > 0 && isActive && (
        <ul className="DracoGlobalNav__SubNav">
          {subNavigationItems.map((sub: SubNavigationItem) => (
            <li key={sub.url} className="DracoGlobalNav__SubNavItem">
              <a
                href={sub.url}
                className={`DracoGlobalNav__SubNavLink${location === sub.url ? ' DracoGlobalNav__SubNavLink--Active' : ''}${sub.disabled ? ' DracoGlobalNav__SubNavLink--Disabled' : ''}`}
                aria-disabled={sub.disabled || undefined}
                onClick={sub.onClick}
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
