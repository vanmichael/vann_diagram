// http://emberjs.com/guides/models/using-the-store/

DS.RESTAdapter.reopen({
  namespace: "api/v1"
});

VannDiagram.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  adapter: '_ams'
});

