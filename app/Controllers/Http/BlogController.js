'use strict'

class BlogController {

  async index({ view }) {
    return view.render('frontend.blog.home');
  }

}

module.exports = BlogController
