//Implementation of clamp, inRange, words, pad, has, invert, findKey, drop, dropWhile and chunk lodash.js library methods
const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      let newStart = start;
      end = newStart;
      start = 0;
    }
    if (start > end) {
      let newStart = start;
      let newEnd = end;
      end = newStart;
      start = newEnd;
    }
    const isInRange = number < start || number >= end ? false : true;
    return isInRange;
  },
  words(string) {
    let array = string.split(' ');
    return array;
  },
  pad(string, length) {
    if (string.length > length) {
      return string;
    } else {
      let totalPadding = length - string.length;
      let padStart = Math.floor(totalPadding / 2);
      let padEnd = totalPadding - padStart;

      return ' '.repeat(padStart) + string + ' '.repeat(padEnd);
    }
  },
  has(object, key) {
    return object[key] === undefined ? false : true;
  },
  invert(object) {
    let newObject = {};
    for (property in object) {
      let newPropValue = object[property];
      newObject[newPropValue] = property;
    }
    return newObject;
  },
  findKey(object, predicate) {
    for (element in object) {
      let value = object[element];
      let predicateReturnValue = predicate(value);
      return predicateReturnValue ? element : undefined;
    }
  },
  drop(array, dropNumber) {
    if (dropNumber === undefined) {
      dropNumber = 1;
    }
    let newArray = array.slice(dropNumber);
    return newArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !(predicate(element, index, array));
    });
    return this.drop(array,dropNumber);
  },
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    }
    let chunkArray = [];
    for (let i = 0; i < array.length; i += size) {
      let returnedChunk = array.slice(i, i + size);
      chunkArray.push(returnedChunk);
    }
    return chunkArray;
  }
};





// Do not write or modify code below this line.
module.exports = _;
