'use strict';
const BlogPosts = use('App/Models/BlogPost');

class FrontendController {

  async index ({ view }) {
    /**
    * TODO: Fetch the 3 latest blog post and display them on the homepage.
    **/
    return view.render('frontend.home');
  }

  async features ({ view }) {
    return view.render('frontend.features');
  }

  async learnMore ({ view }) {
    return view.render('frontend.learn-more');
  }

}

module.exports = FrontendController;
