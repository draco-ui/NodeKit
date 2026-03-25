/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  DracoActionMenu,
  DracoActionMenuItem,
  DracoActionMenuTrigger,
  DracoActionMenuOverlay,
} from '@dracoui-brand/lit';
import { createComponent } from '@lit/react';

import type { EventName } from '@lit/react';

const ActionMenuRoot = createComponent({
  tagName: 'draco-action-menu',
  elementClass: DracoActionMenu,
  react: React,
  events: {
    onOpenChange: 'draco-open-change' as EventName<CustomEvent<{ open: boolean }>>,
  },
});

const ActionMenuTrigger = createComponent({
  tagName: 'draco-action-menu-trigger',
  elementClass: DracoActionMenuTrigger,
  react: React,
});

const ActionMenuOverlay = createComponent({
  tagName: 'draco-action-menu-overlay',
  elementClass: DracoActionMenuOverlay,
  react: React,
});

const ActionMenuItem = createComponent({
  tagName: 'draco-action-menu-item',
  elementClass: DracoActionMenuItem,
  react: React,
  events: {
    onSelect: 'draco-select' as EventName<CustomEvent>,
  },
});

export const ActionMenu = Object.assign(ActionMenuRoot, {
  Trigger: ActionMenuTrigger,
  Overlay: ActionMenuOverlay,
  Item: ActionMenuItem,
});
