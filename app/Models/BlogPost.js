'use strict';

const Model = use('Model');

class BlogPost extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeCreate', 'BlogPost.compileMarkdown');
  }

  author () {
    return this.hasOne('App/Models/User');
  }

  category () {
    return this.hasOne('App/Models/BlogCategory');
  }
}

module.exports = BlogPost;
