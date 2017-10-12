'use strict';

const Model = use('Model');

class BlogPost extends Model {
  user () {
    return this.hasOne('App/Models/User');
  }

  categories () {
    return this.hasMany('App/Models/BlogCategory');
  }
}

module.exports = BlogPost;
