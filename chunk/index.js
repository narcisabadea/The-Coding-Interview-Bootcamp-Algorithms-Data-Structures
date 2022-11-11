// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
function chunk(array, size) {
  let newArr = [];

  for (let elem of array) {
    const last = newArr[newArr.length - 1];

    if (!last || last.length === size) {
      newArr.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return newArr;
}

// Solution 2
function chunk2(array, size) {
  let newArr = [];
  let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }

  return newArr;
}

module.exports = chunk;
