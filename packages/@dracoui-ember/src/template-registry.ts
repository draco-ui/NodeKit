// Avatar
import type DracoAvatarComponent from "./components/draco/avatar";

// Avatar Github
import type DracoAvatarGithubComponent from "./components/draco/avatar/github";

// Button Component
import type DracoButtonComponent from './components/draco/button';

//Loading Component
import type DracoLoadingDotsComponent from './components/draco/button';

// Interactive Component
import type DracoInteractiveComponent from "./components/draco/interactive";

export default interface DracoComponentsRegistry {
  // Avatar
  'Draco::Avatar': typeof DracoAvatarComponent;
  'draco/avatar': typeof DracoAvatarComponent;

  // Avatar Github
  'Draco::Avatar::Github': typeof DracoAvatarGithubComponent;
  'draco/avatar/github': typeof DracoAvatarGithubComponent;

  // Button
  'Draco::Button': typeof DracoButtonComponent;
  'draco/button': typeof DracoButtonComponent;

  // Loading
  'Draco::LoadingDots': typeof DracoLoadingDotsComponent;
  'draco/loading-dots': typeof DracoLoadingDotsComponent;

  // Interactive
  'Draco::Interactive': typeof DracoInteractiveComponent;
  'draco/interactive': typeof DracoInteractiveComponent;
};