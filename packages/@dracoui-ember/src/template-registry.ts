
// Button Component
import type DracoButtonComponent from './components/draco/button';

//Loading Component
import type DracoLoadingComponent from './components/draco/button';

// Interactive Component
import type DracoInteractiveComponent from "./components/draco/interactive";

export default interface DracoComponentsRegistry {
  // Button
  'Draco::Button': typeof DracoButtonComponent;
  'draco/button': typeof DracoButtonComponent;

  // Loading
  'Draco::Loading': typeof DracoLoadingComponent;
  'draco/olading': typeof DracoLoadingComponent;

  // Interactive
  'Draco::Interactive': typeof DracoInteractiveComponent;
  'draco/interactive': typeof DracoInteractiveComponent;
};