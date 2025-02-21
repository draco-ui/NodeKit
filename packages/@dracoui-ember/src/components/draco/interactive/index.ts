import Component from '@glimmer/component';
import { action } from "@ember/object";
import { assert } from '@ember/debug';

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
  get isHrefExternal(): boolean {
    const { isHrefExternal, href } = this.args;

    assert(
      `@isHrefExternal for "DracoInteractive" must be a valid 'boolean'; received: ${isHrefExternal}`,
      isHrefExternal === undefined || typeof isHrefExternal === 'boolean'
    );

    assert(
      `@href for "DracoInteractive" must be a valid 'string'; received: ${href}`,
      href === undefined || typeof href === 'string'
    );

    if (typeof isHrefExternal === 'boolean') {
      return isHrefExternal;
    }

    if (href) {
      try {
        const url = new URL(href, window.location.origin);
        return url.origin !== window.location.origin;
      } catch (e) {
        return false;
      }
    }

    return false;
  }

  get isRouteExternal(): boolean {
    const { isRouteExternal, route } = this.args;

    assert(
      `@isRouteExternal for "Draco::Interactive" must be a valid 'boolean'; received: ${isRouteExternal}`,
      isRouteExternal === undefined || typeof isRouteExternal === 'boolean'
    );

    assert(
      `@route for "Draco::Interactive" must be a valid 'string'; received: ${route}`,
      route === undefined || typeof route === 'string'
    );

    if (typeof isRouteExternal === 'boolean') {
      return isRouteExternal;
    }

    if (route) {
      return false;
    }

    return false;
  }

  @action
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Space') {
      (event.target as HTMLElement).click();
    }
  }
}
