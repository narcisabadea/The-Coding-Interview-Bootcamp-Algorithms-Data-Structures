# Queue

<img width="550" alt="Screenshot 2022-11-16 at 21 01 45" src="https://user-images.githubusercontent.com/30498113/202269952-57b407ca-c6f7-492d-9af1-98b29eeba5b3.png">

Queue uses FIFO (First In First Out).<br>
Adding to queue is equivalent to array.unshift().<br>
Removing to queue is equivalent to array.pop().<br>

## Exercise:<br>
Create a queue data structure. The queue
should be a class with methods 'add' and 'remove'.
Adding to the queue should store an element until
it is removed

--- Example
<br> const q = new Queue();
<br> q.add(1);
<br> q.remove(); // returns 1;

## Solution

```js
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}
```
