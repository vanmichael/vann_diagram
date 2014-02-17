// For more information see: http://emberjs.com/guides/routing/

VannDiagram.Router.map(function() {

  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
    this.route('new');
    this.route('show', { path: ':post_id' });
  });

  this.route('home', { path: '/' });
  this.route('about');
});
