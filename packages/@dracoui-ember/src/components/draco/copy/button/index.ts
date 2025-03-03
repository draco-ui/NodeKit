import DracoButton from "../../button/index.ts";

import type { DracoButtonSignature } from "../../button/index.ts";

export interface DracoCopyButtonSignature extends DracoButtonSignature {
  Args: Omit<DracoButtonSignature['Args'], 'icon' | 'iconSize' | 'iconPosition' | 'isIconOnly' | 'loading' | 'text'> & {

  };
}

export default class DracoCopyButton extends DracoButton<DracoCopyButtonSignature> {

}