VannDiagram.PostsRoute = Ember.Route.extend({
   model: function() {
    return this.store.find('post');
  }
});

// var posts = [
//   {
//     id: 1,
//     title: "Van's First Post",
//     author: { name: "van" },
//     body: "My first ember post."
//   },
//   {
//     id: 2,
//     title: "Van's Second Post",
//     author: { name: "van" },
//     body: "My second ember post."
//   }
// ];

//  var posts = $.get('/api/posts.json', function(data) {
//   data.responseJSON;
// });
