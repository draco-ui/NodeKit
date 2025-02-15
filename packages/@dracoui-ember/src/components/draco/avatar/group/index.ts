import { DEFAULT_SIZE } from "../index.ts";
import { assert } from '@ember/debug';
import Component from "@glimmer/component";

export type Member = {
  username: string;
};

export interface DracoAvatarGroupSignature {
 Args: {
    size?: number;
    limit?: number;
    members?: Member[];
  },
  Blocks: {
    default: [];
  };
}

export default class DracoAvatarGroup extends Component<DracoAvatarGroupSignature> {
  get limit(): number {
    // If its NaN them we assume there is no limit
    const { limit = 0 } = this.args;

    return limit;
  }

  get size(): number {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Avatar" must be a valid number; received: ${size}`,
      typeof size === 'number'
    );

    return size;
  }

  get members(): Member[] {
    const { members = [] } = this.args;
    return members;
  }
}