/**
 * Updates the values of unique items in a Map.
 * 
 * If the input is a Map and contains entries with a value of 1, those values are updated to 100.
 * If the input is not a Map, an error is thrown.
 * 
 * @param {Map} map - A Map object containing key-value pairs.
 * 
 * @throws {Error} Throws an error if the input is not a Map.
 * 
 */
export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  }