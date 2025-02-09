/**
 * Copyright (c) {year} Corinvo, LLC. and affiliates.
 * Licensed under the MIT License
 */
import Component from '@glimmer/component';
export interface DracoInteractiveSignature {
    Args: {
        href?: string;
        isHrefExternal?: boolean;
        isRouteExternal?: boolean;
        route?: string;
        models?: unknown[];
        model?: unknown;
        query?: Record<string, unknown>;
        'current-when'?: string | boolean;
        replace?: boolean;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLAnchorElement | HTMLButtonElement;
}
export default class DracoInteractive extends Component<DracoInteractiveSignature> {
    get isHrefExternal(): boolean;
    get isRouteExternal(): boolean;
    onKeyUp(event: KeyboardEvent): void;
}
//# sourceMappingURL=index.d.ts.map