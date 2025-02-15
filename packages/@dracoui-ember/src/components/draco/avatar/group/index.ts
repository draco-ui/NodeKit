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
    const { limit = NaN } = this.args;

    return limit;
  }

  get members(): Member[] {
    const { members = [] } = this.args;
    return members;
  }
}