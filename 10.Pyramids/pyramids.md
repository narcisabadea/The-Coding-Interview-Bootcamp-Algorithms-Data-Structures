# Pyramids

## Exercise:

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character. Make sure the
pyramid has spaces on both the left _and_ right hand sides

--- Example
<br> pyramid(1)
<br> '#'
<br> pyramid(2)
<br> ' # '
<br> '###'
<br> pyramid(3)
<br> ' # '
<br> ' ### '
<br> '#####'

## Solution 1

```js
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}
```

## Solution 2

```js
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}
```
