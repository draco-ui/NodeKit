import truncate from "truncate";
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import DracoButton from "../../button/index.ts";
import { DracoCopySnippetStatusValues } from "./types.ts";
import { DracoButtonColorValues } from '../../button/types.ts';

import type { DracoCopySnippetStatuses } from "./types.ts";
import type { DracoButtonColors} from "../../button/types.ts";
import type { DracoIconSignature } from "../../icon/index.ts";
import type { DracoButtonSignature } from "../../button/index.ts";
import type { DracoClipboardModifierSignature } from "src/modifiers/draco-clipboard";

export const DEFAULT_COLOR: DracoButtonColorValues = DracoButtonColorValues.Tertiary as const;
export const DEFAULT_STATUS: DracoCopySnippetStatuses = DracoCopySnippetStatusValues.Idle as const;

export const AVAILABLE_COLORS: string[] = Object.values(DracoButtonColorValues)
  .filter((color) =>
    [
      DracoButtonColorValues.Primary,
      DracoButtonColorValues.Secondary,
      DracoButtonColorValues.Tertiary
    ].includes(color)
  );

export interface DracoCopySnippetSignature extends DracoButtonSignature {
  Args: Omit<DracoButtonSignature['Args'], 'icon' | 'iconSize' | 'iconPosition' | 'isIconOnly' | 'loading' | 'text'> & {
    isTruncated?: boolean;
    textToCopy?: DracoClipboardModifierSignature['Args']['Named']['text'];

    // Callback Functions
    onError?: DracoClipboardModifierSignature['Args']['Named']['onError'];
    onSuccess?: DracoClipboardModifierSignature['Args']['Named']['onSuccess'];
  };
  Element: HTMLButtonElement;
};

export default class DracoCopySnippet extends DracoButton<DracoCopySnippetSignature> {
  protected componentName = 'Draco::Copy::Snippet';

  @tracked private _timer: ReturnType<typeof setTimeout> | undefined;
  @tracked private _status: DracoCopySnippetStatuses = DEFAULT_STATUS;

  /**
   * Gets the text to show, truncated if necessary.
   * @returns {string} The text to show.
   */
  get textToShow(): string {
    const { textToCopy = '' } = this.args;
    const text = typeof textToCopy === 'string' ? textToCopy : textToCopy.toString();

    const truncateLimit = 14;

    return this.isTruncated ? truncate(text, truncateLimit) : text;
  }

  /**
   * Gets the icon based on the current status.
   * @returns {DracoIconSignature['Args']['name']} The icon name.
   */
  get icon(): DracoIconSignature['Args']['name'] {
    const iconMap: Record<DracoCopySnippetStatuses, DracoIconSignature['Args']['name']> = {
      [DracoCopySnippetStatusValues.Error]: 'lucide:clipboard-x' as unknown as DracoIconSignature['Args']['name'],
      [DracoCopySnippetStatusValues.Idle]: 'lucide:clipboard-copy' as unknown as DracoIconSignature['Args']['name'],
      [DracoCopySnippetStatusValues.Success]: 'lucide:clipboard-check' as unknown as DracoIconSignature['Args']['name']
    };

    return iconMap[this._status] ?? iconMap[DracoCopySnippetStatusValues.Idle];
  }

  /**
   * Gets the color for the button, ensuring it is a valid color.
   * @returns {Exclude<DracoButtonColors, DracoButtonColorValues.Amber | DracoButtonColorValues.Error>} The button color.
   */
  get color(): Exclude<DracoButtonColors, DracoButtonColorValues.Amber | DracoButtonColorValues.Error> {
    const color = this.args.color || this.args.variant || this.args.type || DEFAULT_COLOR;

    assert(
      `@color for "${this.componentName}" must be one of the following: ${AVAILABLE_COLORS.join(
        ', '
      )}; received: ${color}`,
      AVAILABLE_COLORS.includes(color)
    );

    return color;
  }

  /**
   * Determines if the text should be truncated.
   * @returns {boolean} True if the text should be truncated, false otherwise.
   */
  get isTruncated(): boolean {
    return this.args.isTruncated ?? true;
  }

  /**
   * Gets the class names for the component.
   * @returns {string} The class names.
   */
  get classNames(): string {
    const classes = ['draco-copy-snippet'];

    // Push copy status
    classes.push(`draco-copy-snippet--status-${this._status}`);

    // Add truncated classes
    if (this.isTruncated) {
      classes.push('draco-copy-snippet--truncated');
    }

    return classes.join(' ');
  }

  /**
   * Handles the success event.
   * @param {DracoClipboardModifierSignature['Args']['Named']['onSuccess']} args - The success event arguments.
   */
  @action
  onSuccess(args: DracoClipboardModifierSignature['Args']['Named']['onSuccess']): void {
    this._status = DracoCopySnippetStatusValues.Success;
    this.resetStatusDelayed();

    const { onSuccess } = this.args;

    if (typeof onSuccess === 'function') {
      onSuccess(args);
    }
  }

  /**
   * Handles the error event.
   * @param {DracoClipboardModifierSignature['Args']['Named']['onError']} args - The error event arguments.
   */
  @action
  onError(args: DracoClipboardModifierSignature['Args']['Named']['onError']): void {
    this._status = DracoCopySnippetStatusValues.Error;
    this.resetStatusDelayed();

    const { onError } = this.args;

    if (typeof onError === 'function') {
      onError(args);
    }
  }

  /**
   * Resets the status after a delay.
   */
  resetStatusDelayed(): void {
    clearTimeout(this._timer);
    this._timer = setTimeout((): void => {
      this._status = DEFAULT_STATUS;
    }, 1500);
  }
};