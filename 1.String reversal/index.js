// --- Directions
// Given a string, return a new string with the reversed order of characters

// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1: using the build in reverse helper

function reverse(str) {
  return str.split("").reverse().join("");
}

// solution 2
// create empty string
// for each character in the string take it and add it to the start of the new string
// return the new string

function reverse2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// solution 3: using the reduce method
function reverse3(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
