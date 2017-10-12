'use strict';

const Model = use('Model');

class BlogPost extends Model {
  static boot () {
    super.boot();
    this.addHook('beforeCreate', 'BlogPost.compileMarkdown');
  }

  user () {
    return this.hasOne('App/Models/User');
  }

  categories () {
    return this.hasMany('App/Models/BlogCategory');
  }
}

module.exports = BlogPost;
