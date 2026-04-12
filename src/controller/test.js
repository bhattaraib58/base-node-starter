import * as testService from '../service/test';

/**
 * Controller to Fetch All.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function fetchAll(req, res, next) {
  try {
    const data = await testService.fetchAll();

    res.json({ data });
  } catch (err) {
    next(err);
  }
}
