import { modifier } from "ember-modifier";
import { assert, warn } from "@ember/debug";

import type { TextToCopy, TargetToCopy } from "./draco-clipboard/types.ts";

export interface DracoClipboardModifierSignature {
  Args: {
    Named: {
      text?: TextToCopy;
      target?: TargetToCopy;

      // Functions
      onError: (...args: any[]) => void;
      onSuccess: (...args: any[]) => void;
    }
  };
  Element: HTMLElement;
};

export const getTextToCopy = (text: TextToCopy): string => {
  let textToCopy: string = '';

  if (typeof text === 'string') {
    textToCopy = text;
  } else if (
    typeof text === 'number' ||
    typeof text === 'bigint'
  ) {
    textToCopy = text.toString();
  } else {
    assert(
      `\`draco-clipboard\` modifier - \`text\` argument must be a string or number - provided: ${typeof text}`
    );
  }

  return textToCopy;
};

export const getTargetElement = (target: string | Node): HTMLElement | undefined => {
  if (typeof target === 'string') {
    const element = document.querySelector<HTMLElement>(target);
    if (!element) {
      console.error(
        '`draco-clipboard` modifier - `target` selector provided does not point to an existing DOM node, check your selector string',
        target
      );
      return;
    }
    return element;
  }

  if (target instanceof HTMLElement) {
    return target;
  }

  if (target instanceof NodeList) {
    assert(
      '`draco-clipboard` modifier - `target` argument must be a string or a DOM node - provided: a list of DOM nodes'
    );
  } else {
    assert(
      `\`draco-clipboard\` modifier - \`target\` argument must be a string or a DOM node - provided: ${typeof target}`
    );
  }

  return undefined;
};


export const getTextToCopyFromTargetElement = (
  targetElement: TargetToCopy
): string => {
  if (!(targetElement instanceof HTMLElement)) {
    return '';
  }

  if (
    targetElement instanceof HTMLInputElement ||
    targetElement instanceof HTMLTextAreaElement ||
    targetElement instanceof HTMLSelectElement
  ) {
    return targetElement.value;
  }

  return targetElement.innerText;
};


export const writeTextToClipboard = async (
  textToCopy: string
): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    return true;
  } catch (error) {
    if (!navigator.clipboard) {
      try {
        const clipboard = await import('clipboard-polyfill');
        await clipboard.writeText(textToCopy);
        return true;
      } catch (polyfillError) {
        warn(
          `copy action failed, unable to use clipboard-polyfill: ${JSON.stringify(polyfillError)}`,
          {
            id: 'draco-clipboard.write-text-to-clipboard.catch-error',
          }
        );
        return false;
      }
    }
    return false;
  }
};

export const copyToClipboard = async (
  text?: TextToCopy,
  target?: TargetToCopy
): Promise<boolean> => {
  let textToCopy: string = '';

  if (text !== undefined) {
    textToCopy = getTextToCopy(text);
  } else if (target) {
    const targetElement = getTargetElement(target);
    if (targetElement) {
      textToCopy = getTextToCopyFromTargetElement(targetElement);
    }
  } else {
    assert(
      '`draco-clipboard` modifier - either a `text` or a `target` argument is required'
    );
  }
  const success = await writeTextToClipboard(textToCopy);
  return success;
};

export default modifier<DracoClipboardModifierSignature>(
  (element, _positional, { text, target, onSuccess, onError }): (() => void) => {
    assert(
      '`draco-clipboard` modifier - the modifier must be applied to an element',
      element
    );

    const onClick = async (event: MouseEvent): Promise<void> => {
      const trigger = event.currentTarget;
      const success = await copyToClipboard(text, target);

      if (success) {
        if (typeof onSuccess === 'function') {
          onSuccess({ trigger, text, target });
        }
      } else if (typeof onError === 'function') {
        onError({ trigger, text, target });
      }
    };

    element.addEventListener('click', onClick);

    return (): void => {
      element.removeEventListener('click', onClick);
    };
  }
);
