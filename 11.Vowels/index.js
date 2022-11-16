// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.

// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
function vowels(str) {
  const vowels = "aeiou";
  let count = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((item) => {
      if (vowels.includes(item)) count++;
    });

  return count;
}

// Solution 2

function vowels2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
