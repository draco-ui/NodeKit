import showdown from 'showdown';

export function initialize() {
  showdown.extension("myExtensionName", function() {
    return [{
      type: 'html',
      regex: '<blockquote>',
      replace: '<blockquote class="blockquote">'
    }];
  });
}

export default {
  name: 'register-showdown-extensions',
  initialize
};
