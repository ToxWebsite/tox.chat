'use strict';

const Schema = use('Schema');

class BlogCategorySchema extends Schema {
  up () {
    this.create('blog_categories', (table) => {
      table.increments();
      table.string('name', 80).notNullable().unique();
      table.string('slug', 80).notNullable().unique();
      table.timestamps();
    });
  }

  down () {
    this.drop('blog_categories');
  }
}

module.exports = BlogCategorySchema;
