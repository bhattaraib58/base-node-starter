import HttpStatus from 'http-status-codes';

import logger from '../utils/logger';
import buildError from '../utils/baseError';

/**
 * To handle errors from body parser for cases such as invalid JSON sent through
 * the body (https://github.com/expressjs/body-parser#errors).
 *
 * @param  {Object}   err
 * @param  {Object}   _req
 * @param  {Object}   res
 * @param  {Function} _next
 */
export function bodyParser(err, _req, res, _next) {
  logger.error(err.message);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: HttpStatus.getStatusText(err.status)
    }
  });
}

/**
 * Method not allowed error middleware. This middleware should be placed at
 * the very bottom of the middleware stack.
 *
 * @param {Object} _req
 * @param {Object} res
 */
export function methodNotAllowed(_req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED)
    }
  });
}

/**
 * Generic error response middleware for validation and internal server errors.
 *
 * @param  {Object}   err
 * @param  {Object}   _req
 * @param  {Object}   res
 * @param  {Function} _next
 */
export function genericErrorHandler(err, _req, res, _next) {
  logger.error(err);
  if (err.stack) {
    logger.debug(err.stack);
  }

  const error = buildError(err);

  res.status(error.code).json({ error });
}
