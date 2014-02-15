VannDiagram.PostsIndexRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

var posts = [
  {
    id: 1,
    title: "Van's First Post",
    author: { name: "van" },
    content: "My first ember post."
  },
  {
    id: 2,
    title: "Van's Second Post",
    author: { name: "van" },
    content: "My second ember post."
  }
];
