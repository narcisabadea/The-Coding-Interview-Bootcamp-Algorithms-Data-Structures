// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1:
function fib(n) {
  let arr = [0, 1];

  for (let i = 1; i <= n; i++) {
    let a = arr[arr.length - 1];
    let b = arr[arr.length - 2];
    arr.push(a + b);
  }

  return arr[n];
}

// Solution 2:
function fib2(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
