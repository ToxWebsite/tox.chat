'use strict';

const BlogCategory = use('App/Models/BlogCategory');
const BlogPost = use('App/Models/BlogPost');
const User = use('App/Models/User');

class BlogController {

  async index({ view }) {
    const categories = await BlogCategory.all();
    const posts = await BlogPost.pick(5);

    console.log(categories.toJSON())

    return view.render('frontend.blog.home', {
      categories: categories.toJSON(),
      posts: posts.toJSON(),
    });
  }

}

module.exports = BlogController
