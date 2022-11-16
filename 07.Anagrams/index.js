// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function format(string) {
  // replace chars with empty strings
  let formattedString = string.replace(/[^\w]/g, "").toLowerCase();
  let obj = {};
  formattedString
    .split("")
    .forEach((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));

  return obj;
}

function anagrams(stringA, stringB) {
  let objA = format(stringA);
  let objB = format(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let char in objA) {
    if (objA[char] !== objB[char]) return false;
  }
  return true;
}

// Solution 2
function sortStr(string) {
  // replace chars with empty strings
  let formattedString = string.replace(/[^\w]/g, "").toLowerCase();
  let sortedString = formattedString.split("").sort().join("");

  return sortedString;
}

function anagrams2(stringA, stringB) {
  let sortedStringA = sortStr(stringA);
  let sortedStringB = sortStr(stringB);

  return sortedStringA === sortedStringB;
}

module.exports = anagrams;
