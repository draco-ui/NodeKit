// PopoverTrigger.types.ts
import type { HTMLAttributes, ReactNode } from 'react';
import type { PopoverTriggerOptions } from '@dracoui-types/popover';

export interface PopoverTriggerProps extends PopoverTriggerOptions, HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  asChild?: boolean;
}
