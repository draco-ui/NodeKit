/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createComponent } from '@lit/react';
import { DracoButton } from '@dracoui-brand/lit';

import type { ComponentProps} from 'react';
import type { ReactWebComponent } from '@lit/react';

export const Button: ReactWebComponent<DracoButton, {}> = createComponent({
  react: React,
  tagName: 'draco-button',
  elementClass: DracoButton,
});

export type ButtonProps = ComponentProps<typeof Button>;
