# Finding the midpoint in a linked list

## Exercise:

Return the 'middle' node of a linked list.
If the list has an even number of elements, return
the node at the end of the first half of the list.
_Do not_ use a counter variable, _do not_ retrieve
the size of the list, and only iterate
through the list one time.

--- Example
<br> const l = new LinkedList();
<br> l.insertLast('a')
<br> l.insertLast('b')
<br> l.insertLast('c')
<br> midpoint(l); // returns { data: 'b' }

## Solution

```js
function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
```
