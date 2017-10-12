'use strict';

const Model = use('Model');

class BlogCategory extends Model {

  posts () {
    return this.hasMany('App/Models/BlogPost');
  }

}

module.exports = BlogCategory;
