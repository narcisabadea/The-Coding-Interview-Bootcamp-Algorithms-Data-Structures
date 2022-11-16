# Stack

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
