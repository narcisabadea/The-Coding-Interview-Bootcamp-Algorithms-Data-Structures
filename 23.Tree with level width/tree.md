# Tree with level width

## Exercise:

Given the root node of a tree, return
an array where each element is the width
of the tree at each level.

<br> --- Example
<br> Given:
<br> 0
<br> / | \
<br> 1 2 3
<br> | |
<br> 4 5
<br> Answer: [1, 3, 2]

## Solution

```js
function levelWidth(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}
```
