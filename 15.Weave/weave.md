# Weave

## Exercise:

1.  Complete the task in weave/queue.js
2.  Implement the 'weave' function. Weave
    receives two queues as arguments and combines the
    contents of each into a new, third queue.
    The third queue should contain the _alterating_ content
    of the two queues. The function should handle
    queues of different lengths without inserting
    'undefined' into the new one.
    _Do not_ access the array inside of any queue, only
    use the 'add', 'remove', and 'peek' functions.

--- Example
<br> const queueOne = new Queue();
<br> queueOne.add(1);
<br> queueOne.add(2);
<br> const queueTwo = new Queue();
<br> queueTwo.add('Hi');
<br> queueTwo.add('There');
<br> const q = weave(queueOne, queueTwo);
<br> q.remove() // 1
<br> q.remove() // 'Hi'
<br> q.remove() // 2
<br> q.remove() // 'There'

## Solution

```js
const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}
```
