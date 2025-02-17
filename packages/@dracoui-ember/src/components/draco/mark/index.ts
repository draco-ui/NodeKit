import TemplateOnlyComponent from '@ember/component/template-only';

export interface DracoMarkSignature {
  Blocks: {
    default: [];
  };
}

const DracoMarkDots = TemplateOnlyComponent<DracoMarkSignature>();

export default DracoMarkDots;