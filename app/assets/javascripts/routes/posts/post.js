VannDiagram.PostsPostRoute = Ember.Route.extend({
  model: function() {
    return posts.findBy('id', params.post_id);
  }
});

var posts = [
  {
    id: 1,
    title: "Van's First Post",
    author: { name: "van" },
    body: "My first ember post."
  },
  {
    id: 2,
    title: "Van's Second Post",
    author: { name: "van" },
    body: "My second ember post."
  }
];
