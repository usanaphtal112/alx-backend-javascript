/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
<<<<<<< Updated upstream
 * Tracks the number of times an API endpoint is queried and
 * throws an error if the endpoint is queried too many times.
 *
 * This function uses a WeakMap to keep track of the number of
 * times each endpoint is queried. If the number of queries to an
 * endpoint exceeds `MAX_ENDPOINT_CALLS`, an error is thrown.
 *
=======
 * Tracks the number of times an API endpoint is queried and throws an error if the endpoint is queried too many times.
 *
 * This function uses a WeakMap to keep track of the number of times each endpoint is queried. If the number of queries to an endpoint exceeds `MAX_ENDPOINT_CALLS`, an error is thrown.
 *
>>>>>>> Stashed changes
 * @param {Object} endpoint - The API endpoint being queried.
 *
 * @throws {Error} Throws an error if the endpoint query count exceeds `MAX_ENDPOINT_CALLS`.
 *
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
