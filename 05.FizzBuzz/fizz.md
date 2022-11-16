# FizzBuzz

Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”.
For numbers which are multiples of both three and five print “fizzbuzz”.

--- Example
<br>
fizzBuzz(5);
<br>
1
<br>
2
<br>
fizz
<br>
4
<br>
buzz

## Solution 1: if statement

```js
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
```

## Solution 2: switch statement

```js
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log("fizzbuzz");
        break;
      case i % 3 === 0:
        console.log("fizz");
        break;
      case i % 5 === 0:
        console.log("buzz");
        break;
      default:
        console.log(i);
    }
  }
}
```
