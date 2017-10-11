'use strict'

const Schema = use('Schema')

class BlogPostSchema extends Schema {
  up () {
    this.create('blog_posts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('blog_posts')
  }
}

module.exports = BlogPostSchema
