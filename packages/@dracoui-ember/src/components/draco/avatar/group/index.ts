import {
  DracoAvatarGroupProviderValues
} from "./types.ts";
import DracoAvatar from "../index.ts";
import { assert } from '@ember/debug';

import type { DracoAvatarSignature } from "../index.ts";
import type { DracoAvatarGroupProviders } from "./types.ts";

export type Member = {
  src?: string;
  username?: string;
  provider?: DracoAvatarGroupProviders;
};

const DEFAULT_LIMIT = 0;
const AVAILABLE_PROVIDERS: string[] = Object.values(DracoAvatarGroupProviderValues);

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
    const { limit = DEFAULT_LIMIT } = this.args;

    return limit;
  }

  get members(): Member[] {
    const { members = [] } = this.args;

    // Validate the members to prevent duplicate avatar provisions.
    members.forEach(member => {
       assert(
        `@member for "Draco::Avatar::Group" can only have the following values for "provider" object: ${AVAILABLE_PROVIDERS.join(
          ', '
        )}; received: ${member.provider}`,
        member.provider === undefined || AVAILABLE_PROVIDERS.includes(member.provider)
      );
    });

    return members;
  }
}