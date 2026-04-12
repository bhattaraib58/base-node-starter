/**
 * Service To Fetch All.
 *
 * @returns {Array}
 */
export function fetchAll() {
  return new Promise((resolve) => {
    resolve({ source: 'Test', data: [] });
  });
}
