'use strict';

const { Command } = require('@adonisjs/ace');
const BlogPost = use('App/Models/BlogPost');

class CreateBlogPost extends Command {
  static get signature () {
    return 'create:blog:post';
  }

  static get description () {
    return 'Create a new blog post';
  }

  async handle (args, options) {
    this.info('Create a new blog post:');

    const post = new BlogPost();

    post.category_id = await this.ask('Category ID:');
    post.user_id     = await this.ask('User ID:');
    post.title       = await this.ask('Title:');
    post.slug        = await this.ask('Slug:');
    post.summary     = await this.ask('Summary:');
    post.markdown    = await this.openEditor('Markdown:');
    post.html        = "";
    post.likes       = 0;
    post.comments    = 0;

    await post.save();
    this.completed('create:blog:post', `Created post « ${post.title} » successfuly!`);
    return;
  }
}

module.exports = CreateBlogPost;
