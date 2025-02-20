import {
  DracoLinkSizeValues
} from "./types.ts";
import { assert } from '@ember/debug';
import Component from "@glimmer/component";

import type {
  DracoLinkSizes
} from "./types.ts";
import type Owner from '@ember/owner';
import type { DracoInteractiveSignature } from "../interactive/index.ts";

const DEFAULT_SIZE = DracoLinkSizeValues.Medium;

const AVAILABLE_SIZES: string[] = Object.values(DracoLinkSizeValues);

export interface DracoLinkSignature {
  Args: DracoInteractiveSignature['Args'] & {
    underline?: boolean;
    text?: string | undefined;
    size?: DracoLinkSizes | number;
  };
  Element: HTMLAnchorElement;
}

export default class DracoLink extends Component<DracoLinkSignature> {
  constructor(owner: Owner, args: DracoLinkSignature['Args']) {
    super(owner, args);

    assert(
      '"Draco::Link" requires one of the following arguments: href, route, or to.',
      Boolean(args.href || args.route)
    );
  }

  get text(): string | undefined {
    return this.args.text ?? undefined;
  }

  get underline(): boolean {
    const { underline = true } = this.args;

    assert(
      `@underline for "Draco::Link" must be a valid 'boolean'; received: ${underline}`,
      typeof underline === 'boolean'
    );

    return underline;
  }

  get size(): DracoLinkSizes | number {
    const { size = DEFAULT_SIZE } = this.args;

     assert(
       `@size for "Draco::Link" must be a valid 'number' or one of the following ${AVAILABLE_SIZES.join(
          ', '
        )}; received: ${size}`,
        typeof size === 'number' || AVAILABLE_SIZES.includes(size)
      );

      return size;
  }

  get classNames(): string {
    const classes = ['draco-link'];

    // add size if not specified as number
    if (typeof this.size !== 'number') {
      classes.push(`draco-link--size-${this.size}`);
    }

    return classes.join(' ');
  }
};