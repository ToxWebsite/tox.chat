'use strict'

const MapErrorCodeToView = {
  404: 'frontend.404',
};

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler {
  _getYouchError (error, req, isJSON) {
    const Youch = require('youch');
    const youch = new Youch(error, req);
    if (isJSON) {
      return youch.toJSON();
    }
    return youch.toHTML();
  }

  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response, view }) {
    if (process.env.NODE_ENV === 'development') {
      const isJSON = request.accepts(['html', 'json']) === 'json';
      const formattedError = await this._getYouchError(error, request.request, isJSON);
      response
        .status(error.status)
        .send(formattedError);
      return;
    }

    response
      .status(error.status)
      .send(view.render('frontend.error'), { error: error });
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
