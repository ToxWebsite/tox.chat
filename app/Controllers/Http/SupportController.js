'use strict'

class SupportController {

  async index({ view }) {
    return view.render('frontend.support.home');
  }

}

module.exports = SupportController
