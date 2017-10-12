'use strict';

const { Command } = require('@adonisjs/ace');
const BlogPost = use('App/Models/BlogPost');
const User = use('App/Models/User');

class CreateBlogPost extends Command {
  static get signature () {
    return 'create:blog:post';
  }

  static get description () {
    return 'Create a new blog post';
  }

  async handle (args, options) {
    this.info('Create a new blog post:');

    const user_id = await this.ask('User ID:');
    const user = await User.find(user_id);
    const post = await user.posts().create({
      user_id: user_id,
      category_id: await this.ask('Category ID:'),
      title: await this.ask('Title:'),
      slug: await this.ask('Slug:'),
      summary: await this.ask('Summary:'),
      markdown: await this.openEditor('Markdown:'),
      html: "",
      likes: 0,
      comments: 0,
    });

    this.completed('create:blog:post', `Created post « ${post.title} » successfuly!`);
    return;
  }
}

module.exports = CreateBlogPost;
