// Avatar
import type DracoAvatarComponent from "./components/draco/avatar";

// Avatar Group
import type DracoAvatarGroupComponent from "./components/draco/avatar/group";

// Avatar Github
import type DracoAvatarGithubComponent from "./components/draco/avatar/github";

// Avatar Gitlab
import type DracoAvatarGitlabComponent from "./components/draco/avatar/gitlab";

// Avatar Bitbucket
import type DracoAvatarBitbucketComponent from "./components/draco/avatar/bitbucket";

// Icon
import type DracoIconComponent from "./components/draco/icon"

// Button Component
import type DracoButtonComponent from './components/draco/button';

//Loading Component
import type DracoLoadingDotsComponent from './components/draco/button';

// Interactive Component
import type DracoInteractiveComponent from "./components/draco/interactive";

// Helpers
import type DracoEqHelper from './helpers/draco-eq.ts';
import type DracoSubtractHelper from './helpers/draco-subtract.ts';

export default interface DracoComponentsRegistry {
  // Avatar
  'Draco::Avatar': typeof DracoAvatarComponent;
  'draco/avatar': typeof DracoAvatarComponent;

  // Avatar Group
  'Draco::Avatar::Group': typeof DracoAvatarGroupComponent;
  'draco/avatar/group': typeof DracoAvatarGroupComponent;

  // Avatar Github
  'Draco::Avatar::Github': typeof DracoAvatarGithubComponent;
  'draco/avatar/github': typeof DracoAvatarGithubComponent;

  // Avatar Gitlab
  'Draco::Avatar::Gitlab': typeof DracoAvatarGitlabComponent;
  'draco/avatar/gitlab': typeof DracoAvatarGitlabComponent;

  // Avatar Bitbucket
  'Draco::Avatar::Bitbucket': typeof DracoAvatarBitbucketComponent;
  'draco/avatar/bitbucket': typeof DracoAvatarBitbucketComponent;

  // Icon
  'Draco::Icon': typeof DracoIconComponent;
  'draco/icon': typeof DracoIconComponent;

  // Button
  'Draco::Button': typeof DracoButtonComponent;
  'draco/button': typeof DracoButtonComponent;

  // Loading
  'Draco::LoadingDots': typeof DracoLoadingDotsComponent;
  'draco/loading-dots': typeof DracoLoadingDotsComponent;

  // Interactive
  'Draco::Interactive': typeof DracoInteractiveComponent;
  'draco/interactive': typeof DracoInteractiveComponent;

  // Helpers
  'draco-eq': typeof DracoEqHelper;
  'draco-subtract': typeof DracoSubtractHelper;
};