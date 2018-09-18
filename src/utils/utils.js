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

export function hashFromArray(dataArray) {
  if (
    typeof dataArray !== "object" &&
    (Array.isArray && !Array.isArray(dataArray))
  ) {
    throw new Error(
      "[Selfpub] dataHash params at arrayFromHash must be type Array",
    );
  }

  const hash = {};
  dataArray.forEach(value => {
    hash[value] = `${value}`;
  });
  return hash;
}

export function isFunction(subject) {
  return typeof subject === "function";
}

export function isPromise(subject) {
  return typeof subject.then === "function";
}
