'use strict';
const Route = use('Route');

/**
* Public Routes.
**/
Route.group(() => {
  Route.get('/', 'FrontendController.index').as('home');
  Route.get('features', 'FrontendController.features').as('features');
  Route.get('learn-more', 'FrontendController.learnMore').as('about');
  Route.get('downloads', 'FrontendController.downloads').as('download');

  Route.get('sharer/fb/:postId', 'SharerController.facebook').as('sharer:fb');
  Route.get('sharer/tw/:postId', 'SharerController.twitter').as('sharer:tw');
  Route.get('sharer/gp/:postId', 'SharerController.googlePlus').as('sharer:gp');
  Route.get('sharer/md/:postId', 'SharerController.medium').as('sharer:md');
});

// Blog stuff.
Route.group(() => {
  Route.get('/:page?', 'BlogController.index').as('blog');
  Route.get('/post/:id/:slug?', 'BlogController.showPost').as('blog:post');
  Route.get('/tags/:slug', 'BlogController.showTag').as('blog:showTags');
  Route.get('rss', 'BlogController.showRSS').as('blog:rss');
}).prefix('blog');

// Support center stuff.
Route.group(() => {
  Route.get('/', 'SupportController.index').as('support:home');
}).prefix('support');

// Developers hub stuff.
Route.group(() => {

}).prefix('developers');

/**
* API Routes.
* @api v1
**/
Route.group(() => {
  Route.get('nodes', 'NodesController.index');
}).prefix('api/v1').formats(['json']);
