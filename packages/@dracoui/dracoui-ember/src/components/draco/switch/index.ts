import Component from "@glimmer/component";

import type { DracoInteractiveSignature } from "../interactive";

export interface DracoSwitchSignature {
  Args: DracoInteractiveSignature['Args'] & {

  };
}

export default class DracoSwitch extends Component<DracoSwitchSignature> {

}