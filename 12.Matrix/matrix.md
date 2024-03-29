# Matrix

## Exercise:

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Example
<br> matrix(2)
<br> [[1, 2],
<br>     [4, 3]]
<br> matrix(3)
<br> [[1, 2, 3],
<br>     [8, 9, 4],
<br>     [7, 6, 5]]
<br> matrix(4)
<br> [[1,   2,  3, 4],
<br>     [12, 13, 14, 5],
<br>     [11, 16, 15, 6],
<br>     [10,  9,  8, 7]]

## Solution

```js
function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
```
