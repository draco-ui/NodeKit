import {
  DracoCopySnippetColorValues,
  DracoCopySnippetStatusValues
} from "./types.ts";
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';

import type {
  DracoCopySnippetColors,
  DracoCopySnippetStatuses
} from "./types.ts";
import type { DracoIconSignature } from "../../icon/index.ts";
import type { DracoClipboardModifierSignature } from "src/modifiers/draco-clipboard";

export const DEFAULT_STATUS: DracoCopySnippetStatuses = DracoCopySnippetStatusValues.Idle as const;
export const DEFAULT_COLOR: DracoCopySnippetColors = DracoCopySnippetColorValues.Secondary as const;

export const AVAILABLE_COLORS: string[] = Object.values(DracoCopySnippetColorValues);

export interface DracoCopySnippetSignature {
  Args: {
    isFullWidth?: boolean;
    isTruncated?: boolean;
    textToCopy?: DracoClipboardModifierSignature['Args']['Named']['text'];

    // Allow calling of color from @variant, @type or @color
    type?: DracoCopySnippetColors;
    color?: DracoCopySnippetColors;
    variant?: DracoCopySnippetColors;

    // Functions
    onError?: DracoClipboardModifierSignature['Args']['Named']['onError'];
    onSuccess?: DracoClipboardModifierSignature['Args']['Named']['onSuccess'];
  };
  Element: HTMLButtonElement;
};

export default class DracoCopySnippet extends Component<DracoCopySnippetSignature> {
  @tracked private _status = DEFAULT_STATUS;
  @tracked private _timer: ReturnType<typeof setTimeout> | undefined;

  get textToShow(): string {
    const { textToCopy = '' } = this.args;
    return typeof textToCopy === 'string' ? textToCopy : textToCopy.toString();
  }

  get icon(): DracoIconSignature['Args']['name'] {
    const iconMap: Record<DracoCopySnippetStatuses, DracoIconSignature['Args']['name']> = {
      [DracoCopySnippetStatusValues.Idle]: 'lucide:clipboard-copy' as unknown as DracoIconSignature['Args']['name'],
      [DracoCopySnippetStatusValues.Success]: 'lucide:clipboard-check' as unknown as DracoIconSignature['Args']['name'],
      [DracoCopySnippetStatusValues.Error]: 'lucide:clipboard-x' as unknown as DracoIconSignature['Args']['name']
    };

    return iconMap[this._status] ?? iconMap[DracoCopySnippetStatusValues.Idle];
  }

  get color(): DracoCopySnippetColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Draco::Copy::Snippet" must be one of the following: ${AVAILABLE_COLORS.join(
        ', '
      )}; received: ${color}`,
      AVAILABLE_COLORS.includes(color)
    );

    return color;
  }

  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? false;
  }

  get isTruncated(): boolean {
    return this.args.isTruncated ?? true;
  }

  get classNames(): string {
    const classes = [];

    // Add truncated classes
    if (this.isTruncated) {
      classes.push('draco-copy-snippet--truncated');
    }

    return classes.join(' ');
  }

  @action
  onSuccess(args: DracoClipboardModifierSignature['Args']['Named']['onSuccess']): void {
    this._status = DracoCopySnippetStatusValues.Success;
    this.resetStatusDelayed();

    const { onSuccess } = this.args;

    if (typeof onSuccess === 'function') {
      onSuccess(args);
    }
  }

  @action
  onError(args: DracoClipboardModifierSignature['Args']['Named']['onError']): void {
    this._status = DracoCopySnippetStatusValues.Error;
    this.resetStatusDelayed();

    const { onError } = this.args;

    if (typeof onError === 'function') {
      onError(args);
    }
  }

  resetStatusDelayed(): void {
    clearTimeout(this._timer);
    this._timer = setTimeout((): void => {
      this._status = DEFAULT_STATUS;
    }, 1500);
  }
};