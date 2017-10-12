'use strict';

const showdown  = require('showdown');

const BlogPostHook = module.exports = {};

BlogPostHook.compileMarkdown = async (postInstance) => {
  if (postInstance.markdown) {
    const parser = new showdown.Converter();
    postInstance.html = parser.makeHtml(postInstance.markdown);
  }
};
