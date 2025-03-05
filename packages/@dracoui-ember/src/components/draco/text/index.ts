import Component from "@glimmer/component";

import type {
  DracoTextTags
} from "./types.ts";

export interface DracoTextSignature {
  Args: {
    tag?: DracoTextTags;
  };
  Block: {
    default: [];
  };
  Element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap];
};

export default class DracoText extends Component<DracoTextSignature> {
  get componentTag(): DracoTextTags {
    const { tag = 'span' } = this.args;

    return tag;
  }
};