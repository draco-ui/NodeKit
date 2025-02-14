import TemplateOnlyComponent from '@ember/component/template-only';

export interface DracoLoadingSignature {
  Blocks: {
    default: [];
  };
}

const DracoLoading = TemplateOnlyComponent<DracoLoadingSignature>();

export default DracoLoading;