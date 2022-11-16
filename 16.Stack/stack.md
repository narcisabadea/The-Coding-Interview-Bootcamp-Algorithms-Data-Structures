# Stack

A stack is an ordered collection of items that follow the Last In First Out (LIFO) principle. The addition and removal of items take place at the same end, i.e. at the top. The newest elements are at the top, and the oldest elements are at the bottom.

A Stack is used by compilers in programming languages, by computer memory to store variables and function calls, and in text editors to perform undo & redo operations.

<img width="250" alt="Screenshot 2022-11-16 at 21 07 27" src="https://user-images.githubusercontent.com/30498113/202270988-df76e857-7956-4205-ba85-93599f5588a7.png">

List of operations performed on Stack
- push(): Adds a single or multiple items to the top of the Stack.
- pop(): Removes and Returns the top item of the Stack.
- peek(): Returns the top item of the Stack.
- isEmpty(): Returns True if Stack is empty, False otherwise.
- clear(): Removes all the items from the Stack.
- size(): Returns the length of the stack.

## Exercise:

Create a stack data structure. The stack
should be a class with methods 'push', 'pop', and
'peek'. Adding an element to the stack should
store it until it is removed.

--- Example
<br> const s = new Stack();
<br> s.push(1);
<br> s.push(2);
<br> s.pop(); // returns 2
<br> s.pop(); // returns 1

## Solution

```js
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
```
