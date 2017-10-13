'use strict';

const BlogCategory = use('App/Models/BlogCategory');
const BlogPost = use('App/Models/BlogPost');
const User = use('App/Models/User');

const showdown  = require('showdown');

class BlogController {

  async index({ view, params, request }) {
    const pageNumber = Number(params.page) || 1;
    const categories = await BlogCategory.all();

    // Eagerloading to avoid n+1 requests.
    const posts = await BlogPost
      .query()
      .with('author')
      .orderBy('updated_at', 'desc')
      .paginate(pageNumber, 6);

    return view.render('frontend.blog.home', {
      categories: categories.toJSON(),
      posts: posts.toJSON(),
      nextPage: pageNumber + 1,
      prevPage: pageNumber - 1,
      canGoNext: (posts.pages.lastPage > pageNumber),
      canGoBack: (pageNumber > 1),
    });
  }

  async showPost({ view, params, request, response }) {
    const categories = await BlogCategory.all();
    const postPromise = await BlogPost.find(params.id);
    const postJSON = postPromise.toJSON();
    const author = await User.find(postJSON.user_id);

    const parser = new showdown.Converter();
    parser.setFlavor('github');
    const postContent = parser.makeHtml(postJSON.markdown);

    return view.render('frontend.blog.show', {
      post: postJSON,
      postContent: postContent,
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
