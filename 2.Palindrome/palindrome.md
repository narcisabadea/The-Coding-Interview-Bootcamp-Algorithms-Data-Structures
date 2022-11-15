# Palindromes

Given a string, return true if the string is a palindrome
or false if it is not.
Palindromes are strings that form the same word if it is reversed.
_Do_ include spaces and punctuation in determining if the string is a palindrome.

--- Examples:
<br>
palindrome("abba") === true
<br>
palindrome("abcdefg") === false

## Solution 1

```js
function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
```

## Solution 2

```js
function palindrome2(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}
```
