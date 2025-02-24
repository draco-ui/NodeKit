import TemplateOnlyComponent from '@ember/component/template-only';

export interface DracoMarkSignature {
  Args: {
    size?: number;
  };
  Blocks: {
    default: [];
  };
}

const DracoMarkDots = TemplateOnlyComponent<DracoMarkSignature>();

export default DracoMarkDots;