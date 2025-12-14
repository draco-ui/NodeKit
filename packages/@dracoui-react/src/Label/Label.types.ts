/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { LabelOptions } from '@dracoui/types';
import type { Interpolation, Theme } from '@emotion/react';

export interface LabelProps
  extends LabelOptions,
    Omit<ComponentPropsWithoutRef<'label'>, 'size'> {
  css?: Interpolation<Theme>;
  children?: ReactNode;
}
