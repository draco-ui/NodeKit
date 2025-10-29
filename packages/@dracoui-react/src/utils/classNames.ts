import clsx, { ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Uses clsx under the hood for efficient class name handling
 *
 * @param classes - Class names to merge
 * @returns Merged class name string
 *
 * @example
 * cn('base-class', condition && 'conditional-class', { 'active': isActive })
 * // Returns: 'base-class conditional-class active' (if condition and isActive are true)
 */
export function cn(...classes: ClassValue[]): string {
  return clsx(classes);
}

/**
 * Generate component class names with BEM-like structure
 *
 * @param component - Base component name
 * @param modifiers - Optional modifiers object
 * @returns Class name string
 *
 * @example
 * getComponentClassName('button', { size: 'large', disabled: true })
 * // Returns: 'draco-button draco-button--large draco-button--disabled'
 */
export function getComponentClassName(
  component: string,
  modifiers?: Record<string, string | boolean | undefined>
): string {
  const baseClass = `draco-${component}`;
  const modifierClasses = modifiers
    ? Object.entries(modifiers)
        .filter(([_, value]) => value)
        .map(([key, value]) => {
          if (typeof value === 'boolean') {
            return `${baseClass}--${key}`;
          }
          return `${baseClass}--${value}`;
        })
    : [];

  return cn(baseClass, ...modifierClasses);
}
