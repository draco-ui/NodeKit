import Route from '@ember/routing/route';

export default class ColorsRoute extends Route {
  queryParams = {
    demoSelectedTab: {
      refreshModel: false,
      replace: true,
    },
  };

  model() {
    return {};
  }
}
