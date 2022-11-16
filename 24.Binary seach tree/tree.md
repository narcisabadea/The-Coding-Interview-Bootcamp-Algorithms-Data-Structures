# Binary search tree

BST is a tree-like data structure with a single root at the very top. They are a great way to store numeric values as their ordered nature allows for fast search and lookups.

Compared to a normal tree, BST has the following properties:
- every left child has a smaller value than its parent
- every right child has a larger value than its parent
- every node can contain from 0 to 2 children.

## Exercise:

1. Implement the Node class to create
   a binary search tree. The constructor
   should initialize values 'data', 'left',
   and 'right'.
2. Implement the 'insert' method for the
   Node class. Insert should accept an argument
   'data', then create an insert a new node
   at the appropriate location in the tree.
3. Implement the 'contains' method for the Node
   class. Contains should accept a 'data' argument
   and return the Node in the tree with the same value.

## Solution

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}
```
