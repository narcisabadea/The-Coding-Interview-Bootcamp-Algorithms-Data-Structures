# Integer reversal

Given an integer, return an integer that is the reverse ordering of numbers.

--- Examples
reverseInt(15) === 51
<br>
reverseInt(981) === 189
<br>
reverseInt(500) === 5
<br>
reverseInt(-15) === -51
<br>
reverseInt(-90) === -9

## Solution:

```js
function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
```
