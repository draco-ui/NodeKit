import type DracoButtonComponent from './components/draco/button';
import type DracoInteractiveComponent from "./components/draco/interactive";
export default interface DracoComponentsRegistry {
    'Draco::Button': typeof DracoButtonComponent;
    'draco/button': typeof DracoButtonComponent;
    'Draco::Interactive': typeof DracoInteractiveComponent;
    'draco/interactive': typeof DracoInteractiveComponent;
}
//# sourceMappingURL=template-registry.d.ts.map