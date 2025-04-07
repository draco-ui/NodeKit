// Avatar
// import type DracoAvatarComponent from "./components/draco/avatar";

// Avatar Group
// import type DracoAvatarGroupComponent from "./components/draco/avatar/group";

// Avatar Github
// import type DracoAvatarGithubComponent from "./components/draco/avatar/github";

// Avatar Gitlab
// import type DracoAvatarGitlabComponent from "./components/draco/avatar/gitlab";

// Avatar Bitbucket
// import type DracoAvatarBitbucketComponent from "./components/draco/avatar/bitbucket";

// Icon
import type DracoIconComponent from "./components/draco/icon";

// Skeleton
import type DracoSkeletonComponent from "./components/draco/skeleton";

// Draco Mark
import type DracoMarkComponent from "./components/draco/mark";

// Button Component
import type DracoButtonComponent from "./components/draco/button";

// Badge Component
import type DracoBadgeComponent from "./components/draco/badge";

// Loading Component
import type DracoLoadingDotsComponent from "./components/draco/button";

// Interactive Component
import type DracoInteractiveComponent from "./components/draco/interactive";

// Toggle Component
import type DracoToggleComponent from "./components/draco/toggle";

// Keyboard Input Component
import type DracoKbdComponent from "./components/draco/kbd";

// Copy Snippet Component
import type DracoCopySnippetComponent from "./components/draco/copy/snippet";

// Input Component
import type DracoInputComponent from "./components/draco/input";

// Tabs Component
import type DracoTabsComponent from "./components/draco/tabs";
import type DracoTabsTabComponent from "./components/draco/tabs/tab";
import type DracoTabsPanelComponent from "./components/draco/tabs/panel";

// Helpers
import type DracoEqHelper from "./helpers/draco-eq.ts";
import type DracoAssertHelper from "./helpers/draco-assert.ts"
import type DracoTypeofHelper from "./helpers/draco-typeof.ts";
import type DracoSubtractHelper from "./helpers/draco-subtract.ts";
import type DracoLinkToQueryHelper from "./helpers/draco-link-to-query.ts";
import type DracoLinkToModelsHelper from "./helpers/draco-link-to-models.ts";

// Modifiers
import type DracoClipboardModifier from "./modifiers/draco-clipboard.ts";

export default interface DracoComponentsRegistry {
  // Avatar
  // 'Draco::Avatar': typeof DracoAvatarComponent;
  // 'draco/avatar': typeof DracoAvatarComponent;

  // Avatar Group
  // 'Draco::Avatar::Group': typeof DracoAvatarGroupComponent;
  // 'draco/avatar/group': typeof DracoAvatarGroupComponent;

  // Avatar Github
  // 'Draco::Avatar::Github': typeof DracoAvatarGithubComponent;
  // 'draco/avatar/github': typeof DracoAvatarGithubComponent;

  // Avatar Gitlab
  // 'Draco::Avatar::Gitlab': typeof DracoAvatarGitlabComponent;
  // 'draco/avatar/gitlab': typeof DracoAvatarGitlabComponent;

  // Avatar Bitbucket
  // 'Draco::Avatar::Bitbucket': typeof DracoAvatarBitbucketComponent;
  // 'draco/avatar/bitbucket': typeof DracoAvatarBitbucketComponent;

  // Icon
  'Draco::Icon': typeof DracoIconComponent;
  'draco/icon': typeof DracoIconComponent;

  // Toggle
  'Draco::Toggle': typeof DracoToggleComponent;
  'draco/toggle': typeof DracoToggleComponent;

  // Input
  'Draco::Input': typeof DracoInputComponent;
  'draco/input': typeof DracoInputComponent;

  // Skeleton
  'Draco::Skeleton': typeof DracoSkeletonComponent;
  'draco/skeleton': typeof DracoSkeletonComponent;

  // Draco Mark
  'Draco::Mark': typeof DracoMarkComponent;
  'draco/Mark': typeof DracoMarkComponent;

  // Draco Copy Snippet
  'Draco::Copy::Snippet': typeof DracoCopySnippetComponent;
  'draco/copy/snippet': typeof DracoCopySnippetComponent;

  // Tabs
  'Draco::Tabs': typeof DracoTabsComponent;
  'draco/tabs': typeof DracoTabsComponent;

  'Draco::Tabs::Tab': typeof DracoTabsTabComponent;
  'draco/tabs/tab': typeof DracoTabsTabComponent;

  'Draco::Tabs::Panel': typeof DracoTabsPanelComponent;
  'draco/tabs/panel': typeof DracoTabsPanelComponent;

  // Button
  'Draco::Button': typeof DracoButtonComponent;
  'draco/button': typeof DracoButtonComponent;

  // Badge
  'Draco::Badge': typeof DracoBadgeComponent;
  'draco/badge': typeof DracoBadgeComponent;

  // Loading
  'Draco::LoadingDots': typeof DracoLoadingDotsComponent;
  'draco/loading-dots': typeof DracoLoadingDotsComponent;

  // Interactive
  'Draco::Interactive': typeof DracoInteractiveComponent;
  'draco/interactive': typeof DracoInteractiveComponent;

  // Keyboard Input
  'Draco::Kbd': typeof DracoKbdComponent;
  'draco/kbd': typeof DracoKbdComponent;

  // Helpers
  'draco-eq': typeof DracoEqHelper;
  'draco-assert': typeof DracoAssertHelper;
  'draco-typeof': typeof DracoTypeofHelper;
  'draco-subtract': typeof DracoSubtractHelper;
  'draco-link-to-query': typeof DracoLinkToQueryHelper;
  'draco-link-to-models': typeof DracoLinkToModelsHelper;

  // Modifiers
  'draco-clipboard': typeof DracoClipboardModifier;
}
