# Queue from stacks

## Exercise:

Implement a Queue datastructure using two stacks.
_Do not_ create an array inside of the 'Queue' class.
Queue should implement the methods 'add', 'remove', and 'peek'.
For a reminder on what each method does, look back
at the Queue exercise.

--- Example
<br> const q = new Queue();
<br> q.add(1);
<br> q.add(2);
<br> q.peek(); // returns 1
<br> q.remove(); // returns 1
<br> q.remove(); // returns 2

## Solution

```js
const Stack = require("./stack");

class Queue {
  constructor() {
    this.queueA = new Stack();
    this.queueB = new Stack();
  }

  add(record) {
    this.queueA.push(record);
  }

  remove() {
    while (this.queueA.peek()) {
      this.queueB.push(this.queueA.pop());
    }

    const record = this.queueB.pop();

    while (this.queueB.peek()) {
      this.queueA.push(this.queueB.pop());
    }

    return record;
  }

  peek() {
    while (this.queueA.peek()) {
      this.queueB.push(this.queueA.pop());
    }

    const record = this.queueB.peek();

    while (this.queueB.peek()) {
      this.queueA.push(this.queueB.pop());
    }

    return record;
  }
}
```
