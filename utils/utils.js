/**
 * Convert hashTable at array by value
 *
 * @param {object} dataHash  - hash table for flattens
 * @returns {Array}
 */
export function arrayFromHash(dataHash) {
  if (typeof dataHash !== "object") {
    throw new Error(
      "[Selfpub] dataHash params at arrayFromHash must be type object",
    );
  }

  let accumulator = [];
  Object.keys(dataHash).forEach(key => {
    accumulator.push(dataHash[key]);
  });
  return accumulator;
}
