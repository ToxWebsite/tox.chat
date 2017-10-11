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
  Route.get('sharer/:media', 'FrontendController.sharer').as('sharer:redirect');
});

// Blog stuff.
Route.group(() => {
  Route.get('/', 'BlogController.index').as('blog');
  Route.get('/:slug', 'BlogController.show').as('blog:post');
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
