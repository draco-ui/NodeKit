import { assert } from '@ember/debug';
import DracoAvatar from "../index.ts";

import type { DracoAvatarSignature } from "../index.ts";

export interface DracoAvatarBitbucketSignature extends DracoAvatarSignature {
  Args: DracoAvatarSignature['Args'] & {
    username: string;
  };
  Blocks: {
    default: [];
  };
};

export default class DracoAvatarBitbucket extends DracoAvatar<DracoAvatarBitbucketSignature> {
  get username(): string {
    const { username } = this.args;

    assert(
      `@username for "Draco::Avatar::Bitbucket" is required; received: ${username}`,
      username
    );

    return username;
  }

  get src(): string {
    return `https://bitbucket.org/account/${this.username}/avatar/`;
  }

  get classNames(): string {
    const classes = ['draco-icon-bitbucket'];
    classes.push(`draco-icon-bitbucket--size-${this.size}`);
    classes.push(`draco-icon-bitbucket--shape-${this.shape}`);
    return classes.join(' ');
  }
}
