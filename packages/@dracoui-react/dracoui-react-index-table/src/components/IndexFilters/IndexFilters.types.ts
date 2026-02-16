/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';

export interface IndexFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  onQueryClear?: () => void;
  placeholder?: string;
  children?: ReactNode;
  className?: string;
}
