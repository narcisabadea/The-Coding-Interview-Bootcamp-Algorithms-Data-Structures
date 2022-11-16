# Circular linked list n from last

Given a linked list, return the element n spaces
from the last node in the list. Do not call the 'size'
method of the linked list. Assume that n will always
be less than the length of the list.

--- Example
<br> const list = new List();
<br> list.insertLast('a');
<br> list.insertLast('b');
<br> list.insertLast('c');
<br> list.insertLast('d');
<br> fromLast(list, 2).data // 'b'

## Solution

```js
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
```
