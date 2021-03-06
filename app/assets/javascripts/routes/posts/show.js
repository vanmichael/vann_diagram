VannDiagram.PostsShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  },
  actions: {
    destroyRecord: function() {
      var model = this.get('controller.model');
      var _this = this;
      model.destroyRecord().then(function() {
        _this.transitionTo('posts.index');
      });
    }
  }
});
