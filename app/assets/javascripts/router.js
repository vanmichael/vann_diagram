// For more information see: http://emberjs.com/guides/routing/

VannDiagram.Router.map(function() {

  this.resource('posts', { path: '/posts' }, function() {

  });

  this.route('about');
});
