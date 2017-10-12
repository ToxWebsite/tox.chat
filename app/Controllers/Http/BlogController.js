'use strict';

const BlogCategory = use('App/Models/BlogCategory');
const BlogPost = use('App/Models/BlogPost');
const User = use('App/Models/User');

class BlogController {

  async index({ view }) {
    const categories = await BlogCategory.all();

    // Eagerloading to avoid n+1 requests.
    const posts = await BlogPost
      .query()
      .with('user')
      .orderBy('updated_at', 'desc')
      .fetch();

    return view.render('frontend.blog.home', {
      categories: categories.toJSON(),
      posts: posts.toJSON(),
    });
  }

}

module.exports = BlogController
