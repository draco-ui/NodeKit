import TemplateOnlyComponent from '@ember/component/template-only';

export interface DracoLoadingSignature {
  Blocks: {
    default: [];
  };
}

const DracoLoadingDots = TemplateOnlyComponent<DracoLoadingSignature>();

export default DracoLoadingDots;