/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';

import { Item } from '../Item';

import type { ReactElement } from 'react';
import type { GlobalNavSectionProps } from './Section.types';

export function Section({ title, items, icon, fill, separator, action, rollup }: GlobalNavSectionProps): ReactElement {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = rollup && !expanded ? items.slice(0, rollup.after) : items;
  const hasRollup = rollup && items.length > rollup.after;

  return (
    <div
      className={`DracoGlobalNav__Section${fill ? ' DracoGlobalNav__Section--Fill' : ''}${separator ? ' DracoGlobalNav__Section--Separator' : ''}`}
    >
      {title && (
        <div className="DracoGlobalNav__SectionHeader">
          {icon && <span className="DracoGlobalNav__SectionIcon">{icon}</span>}
          <span className="DracoGlobalNav__SectionTitle">{title}</span>
          {action && (
            <button
              type="button"
              className="DracoGlobalNav__SectionAction"
              aria-label={action.accessibilityLabel}
              onClick={action.onClick}
            >
              {action.icon}
            </button>
          )}
        </div>
      )}

      <ul className="DracoGlobalNav__ItemList">
        {visibleItems.map((item) => (
          <Item key={item.url ?? item.label} {...item} />
        ))}
      </ul>

      {hasRollup && (
        <button
          type="button"
          className="DracoGlobalNav__Rollup"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? rollup.hide : rollup.view}
        </button>
      )}
    </div>
  );
}
