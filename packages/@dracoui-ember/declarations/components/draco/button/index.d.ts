import Component from "@glimmer/component";
import { DracoButtonSizeValues, DracoButtonColorValues } from './types.ts';
import type { DracoButtonSizes, DracoButtonShapes, DracoButtonColors } from './types.ts';
import type { DracoInteractiveSignature } from '../interactive/';
export declare const SIZES: string[];
export declare const COLORS: string[];
export declare const DEFAULT_SIZE = DracoButtonSizeValues.Medium;
export declare const DEFAULT_COLOR = DracoButtonColorValues.Primary;
export interface DracoButtonSignature {
    Args: DracoInteractiveSignature['Args'] & {
        size?: DracoButtonSizes;
        loading?: boolean;
        text?: string;
        isFullWidth?: boolean;
        isInline?: boolean;
        shape?: DracoButtonShapes | undefined;
        type?: DracoButtonColors;
        color?: DracoButtonColors;
        variant?: DracoButtonColors;
    };
    Element: DracoInteractiveSignature['Element'];
}
export default class DracoButton extends Component<DracoButtonSignature> {
    get text(): string;
    get size(): DracoButtonSizes;
    get color(): DracoButtonColors;
    get loading(): boolean;
    get shape(): DracoButtonShapes;
    get isFullWidth(): boolean;
    get classNames(): string;
}
//# sourceMappingURL=index.d.ts.map