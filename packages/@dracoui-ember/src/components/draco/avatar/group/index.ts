import DracoAvatar from "../index.ts";
import { assert } from '@ember/debug';

import type { DracoAvatarSignature } from "../index.ts";

export type Member = {
  username: string;
};

export interface DracoAvatarGroupSignature extends DracoAvatarSignature {
  Args: DracoAvatarSignature['Args'] & {
    limit?: number;
    members?: Member[];
  };
  Blocks: {
    default: [];
  };
}

export default class DracoAvatarGroup extends DracoAvatar<DracoAvatarGroupSignature> {
  get limit(): number {
    const { limit = 0 } = this.args;

    return limit;
  }

  get members(): Member[] {
    const { members = [] } = this.args;
    return members;
  }
}