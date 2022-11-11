// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i)+ " ".repeat(n-i));
  }
}

// Solution 2
function steps2(n) {
  for (let row = 1; row <= n; row++) {
    let stair = "";
    for (let col = 1; col <= n; col++) {
      col <= row ? (stair += "#") : (stair += " ");
    }
    console.log(stair);
  }
}

// Solution 3
function steps3(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";

  steps(n, row, stair + add);
}

module.exports = steps;
