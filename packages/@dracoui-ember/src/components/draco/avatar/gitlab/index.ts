import { assert } from '@ember/debug';
import DracoAvatar from "../index.ts";
import { action } from '@ember/object';
import { Gitlab } from '@gitbeaker/rest';
import { tracked } from '@glimmer/tracking';

import type Owner from '@ember/owner';
import type { DracoAvatarSignature } from "../index.ts";

export interface DracoAvatarGitlabSignature extends DracoAvatarSignature {
  Args: DracoAvatarSignature['Args'] & {
    username: string;
  };
  Blocks: {
    default: [];
  };
};

export default class DracoAvatarGitlab extends DracoAvatar<DracoAvatarGitlabSignature> {
  @tracked userProfilePicture: string | null = null;

  get username(): string {
    const { username } = this.args;

    assert(
      `@username for "Draco::Avatar::Gitlab" is required; received: ${username}`,
      username
    );

    return username;
  }

  constructor(owner: Owner, args: DracoAvatarGitlabSignature['Args']) {
    super(owner, args);
    this.loadUserProfilePicture();
  }

  @action
  async loadUserProfilePicture() {
    const api = new Gitlab({
      host: 'https://gitlab.com'
    });

    try {
      const users = await api.Users.all({
        username: this.username
      });

      if (users.length > 0) {
        this.userProfilePicture = users[0].avatar_url;
      } else {
        throw new Error(`No GitLab user found with username: ${this.username}`);
      }
    } catch (error) {
      console.error(`Error fetching user data: ${error.message}`);
    }
  }

  get classNames(): string {
    const classes = ['draco-icon-gitlab'];

    // add a class based on the @size argument
    classes.push(`draco-icon-gitlab--size-${this.size}`);

    // add a class based on the @shape argument
    classes.push(`draco-icon-gitlab--shape-${this.shape}`);

    return classes.join(' ');
  }
}