# Sentence capitalization

Write a function that accepts a string. The function should
capitalize the first letter of each word in the string then
return the capitalized string.

--- Example
<br> capitalize('a short sentence') --> 'A Short Sentence'
<br> capitalize('a lazy fox') --> 'A Lazy Fox'
<br> capitalize('look, it is working!') --> 'Look, It Is Working!'

## Solution 1

```js
function capitalize(str) {
  const words = [];
  let arr = str.split(" ");
  arr.forEach((el) => words.push(el[0].toUpperCase() + el.slice(1)));
  return words.join(" ");
}
```

## Solution 2

```js
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
```
