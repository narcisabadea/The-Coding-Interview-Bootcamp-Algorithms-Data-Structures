# Fibonacci

Print out the n-th entry in the fibonacci series.
The fibonacci series is an ordering of numbers where
each number is the sum of the preceeding two.
For example, the sequence
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.

--- Example
<br> fib(4) === 3

## Solution 1:

```js
function fib3(n) {
  let arr = [0, 1];

  for (let i = 1; i <= n; i++) {
    let a = arr[arr.length - 1];
    let b = arr[arr.length - 2];
    arr.push(a + b);
  }

  return arr[n];
}
```

## Solution 2:

```js
function fib2(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
```

## Solution 3: improving performance by using memoization for the recursive method (cache the values already calculated)

```js
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
```
