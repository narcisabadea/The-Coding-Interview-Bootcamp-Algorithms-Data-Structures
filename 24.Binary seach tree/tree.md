# Binary search tree

BST is a tree-like data structure with a single root at the very top. They are a great way to store numeric values as their ordered nature allows for fast search and lookups.

Compared to a normal tree, BST has the following properties:
- every left child has a smaller value than its parent
- every right child has a larger value than its parent
- every node can contain from 0 to 2 children.

So, a Binary Search Tree is a type of tree data structure that has two child nodes and uses the binary search algorithm to search for a value. This binary search algorithm happens in 0(log(n)) time.

## Operations

The operations in a binary search tree are:
- Insertion:
   - Create a new node and set the left and right subtree to null.
   - Start searching the tree: If the tree is empty, add the new node as root.
   - If the tree is not empty, check if the new node is less than the parent root and if it is, adds it to the left. If it is not, check if it is greater      than and if it is, add it to the right.
- Deletion:
   - Removing the node with no children: Just remove the node.
   - Removing a node with one child: Remove the node(red) and replace it with its child.
   - Removing a node with two children: Find the in-order node of the actual node(red) to be removed. Replace the chikd with it and remove it from its         original position.
- Searching:
   - Check if there is a root node. If no root, the node does not exist.
   - If a root exists, we check if it equals the key value to what we are searching for. Search is successful if the values are equal.
   - If the search is unsuccessful, we check if the value being searched is less or greater than the parent root.
   - If less, move to the left tree and search again. If greater, move to the right tree and search again.

<img width="550" alt="Screenshot 2022-11-17 at 11 33 27" src="https://user-images.githubusercontent.com/30498113/202409557-d609a7d6-b71e-42d8-ba8e-44f7c09688f8.png">

## Graph vs Tree

Remember a Graph consists of a set or collection of nodes and edges. Literally, if we had just one node and no edges, then we can not call that Graph.

For a Tree, most people say it is just a type of Graph, which is valid. Because it has nodes and edges. But a node in a Tree must have one parent and there are no cycles. This means a Tree is simply a Graph with no cycles.

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
