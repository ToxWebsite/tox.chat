'use strict';

const Schema = use('Schema');

class BlogPostSchema extends Schema {
  up () {
    this.createTableIfNotExists('blog_posts', (table) => {
      table.increments();
      table.integer('category_id').references('id').inTable('blog_categories');
      table.integer('user_id').references('id').inTable('users');
      table.string('slug', 80).notNullable().unique();
      table.string('title', 150).notNullable();
      table.text('summary').notNullable();
      table.text('markdown', 'longtext').notNullable();
      table.text('html', 'longtext').notNullable();
      table.integer('likes').defaultTo(0);
      table.integer('comments').defaultTo(0);
      table.timestamps();
    });
  }

  down () {
    this.dropIfExists('blog_posts');
  }
}

module.exports = BlogPostSchema;
