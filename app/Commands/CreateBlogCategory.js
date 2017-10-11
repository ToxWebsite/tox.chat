'use strict'

const { Command } = require('@adonisjs/ace');
const BlogCategory = use('App/Models/BlogCategory');

class CreateBlogCategory extends Command {
  static get signature () {
    return 'create:blog:category'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Create a new blog category/tag:');

    const category = new BlogCategory();

    category.name = await this.ask('Name:');
    category.slug = await this.ask('Slug:');

    await category.save();
    this.completed('create:blog:category', `Created ${category.name} row successfuly!`);
    return;
  }
}

module.exports = CreateBlogCategory
