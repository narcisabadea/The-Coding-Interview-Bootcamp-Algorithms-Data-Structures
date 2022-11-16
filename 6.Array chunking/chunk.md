# Array chunking

Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

--- Example
<br> chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
<br> chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
<br> chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[1, 2, 3], [4, 5, 6], [7, 8]]
<br> chunk([1, 2, 3, 4, 5], 4) --> [[1, 2, 3, 4], [5]]
<br> chunk([1, 2, 3, 4, 5], 10) --> [[1, 2, 3, 4, 5]]

## Solution 1

```js
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
```

## Solution 2

```js
function chunk(array, size) {
  let newArr = [];
  let index = 0;

  while (index < array.length) {
    newArr.push(array.slice(index, index + size));
    index += size;
  }

  return newArr;
}
```
