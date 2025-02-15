import { assert } from '@ember/debug';
import DracoAvatar from "../index.ts";
import { action } from '@ember/object';
import { Octokit } from "@octokit/rest";
import { tracked } from '@glimmer/tracking';

import type Owner from '@ember/owner';
import type { DracoAvatarSignature } from "../index.ts";

export interface DracoAvatarGithubSignature extends DracoAvatarSignature {
  Args: DracoAvatarSignature['Args'] & {
    username: string;
  };
  Blocks: {
    default: [];
  };
}

export default class DracoAvatarGithub extends DracoAvatar<DracoAvatarGithubSignature> {
  @tracked userProfilePicture: string | null = null;

  get username(): string {
    const { username } = this.args;

    assert(
      `@username for "Draco::Avatar::Github" is required; received: ${username}`,
      username
    );

    return username;
  }

  constructor(owner: Owner, args: DracoAvatarGithubSignature['Args']) {
    super(owner, args);
    this.loadUserProfilePicture();
  }

  @action
  async loadUserProfilePicture() {
    const octokit = new Octokit();

    try {
      const { data } = await octokit.users.getByUsername({
        username: this.username
      });

      this.userProfilePicture = data.avatar_url;
    } catch (error) {
      console.error(`Error fetching user data: ${error.message}`);
    }
  }
}
