# Queue

A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.

A queue works based on the first-in, first-out (FIFO) principle.

A queue has two main operations:
- Insert a new element at the end of the queue, which is called enqueue. Adding to queue is equivalent to array.unshift().<br>
- Remove an element from the front of the queue, which is called dequeue. Removing from the queue is equivalent to array.pop().<br>

The following picture illustrates a queue: <br>

<img width="550" alt="Screenshot 2022-11-16 at 21 01 45" src="https://user-images.githubusercontent.com/30498113/202269952-57b407ca-c6f7-492d-9af1-98b29eeba5b3.png">

Another important operation of a queue is getting the element at the front called peek. Different from the dequeue operation, the peek operation returns the element at the front without modifying the queue.

The name queue comes from the analogy to a queue of customers at a bank. The customer who comes first will be served first, and the one who comes later is queued at the end of the queue and will be served later.


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
