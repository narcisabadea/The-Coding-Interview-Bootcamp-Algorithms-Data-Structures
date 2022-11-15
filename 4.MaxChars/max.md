# Max Chars

Given a string, return the character that is most commonly used in the string.

--- Examples
<br>
maxChar("abcccccccd") === "c"
<br>
maxChar("apple 1231111") === "1"

## Solution:

```js
function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```
