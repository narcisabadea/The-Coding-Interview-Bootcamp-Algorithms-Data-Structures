# Tree

The tree data structure can be regarded as a collection of nodes with a parent node. Each node is linked to the other by the edges and can be linked to multiple other nodes. This is almost like the data structure Linked List but the only difference is that each node can be linked to multiple other nodes. The image below shows what a tree looks like:

<img width="350" alt="Screenshot 2022-11-17 at 11 28 34" src="https://user-images.githubusercontent.com/30498113/202408393-513abb17-0994-45c0-9a03-ab41d35d218e.png">

The two most important things to note are that there is a parent and a child node. The parent node has an edge upward to a node. For example, E has a parent node B, K and L have a parent node E.

A child node on the other hand has an edge down to a node. E has two child nodes K and L, H has a child node M and C has three child nodes F, G, and H.

But there is a constraint: two nodes cannot reference the same node. For example, C and D can not have an edge that connects to H at the same time.


## Exercise:

1. Create a node class. The constructor
   should accept an argument that gets assigned
   to the data property and initialize an
   empty array for storing children. The node
   class should have methods 'add' and 'remove'.
2. Create a tree class. The tree constructor
   should initialize a 'root' property to null.
3. Implement 'traverseBF' and 'traverseDF'
   on the tree class. Each method should accept a
   function that gets called with each element in the tree

## Solution

```js
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}
```
