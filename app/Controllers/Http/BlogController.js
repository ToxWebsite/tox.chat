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

  async show({ view, params, request, response }) {
    const categories = await BlogCategory.all();
    const postPromise = await BlogPost.query().where('slug', params.slug).first();
    const postJSON = postPromise.toJSON();
    const author = await User.find(postJSON.user_id);

    return view.render('frontend.blog.show', {
      post: postJSON,
      author: author.toJSON(),
      categories: categories.toJSON(),
    });
  }

  async showTag({ view, params }) {
    const categories = await BlogCategory.all();
    const tag = await BlogCategory.query().where('slug', params.slug).first();

    // Eagerloading to avoid n+1 requests.
    const posts = await BlogPost
      .query()
      .with('user')
      .where('category_id', tag.id)
      .orderBy('updated_at', 'desc')
      .fetch();

    return view.render('frontend.blog.home', {
      categories: categories.toJSON(),
      posts: posts.toJSON(),
    });
  }
}

module.exports = BlogController;
