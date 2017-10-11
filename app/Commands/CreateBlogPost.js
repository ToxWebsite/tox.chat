'use strict'

const { Command } = require('@adonisjs/ace')

class CreateBlogPost extends Command {
  static get signature () {
    return 'create:blog:post'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for create:blog:post command')
  }
}

module.exports = CreateBlogPost
