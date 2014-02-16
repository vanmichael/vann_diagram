VannDiagram.PostsShowRoute = Ember.Route.extend({
  model: function() {
    return posts.findBy('id', params.post_id);
  }
});
