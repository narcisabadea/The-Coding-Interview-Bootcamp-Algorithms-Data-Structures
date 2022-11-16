# Circular linked list

## Exercise:

Given a linked list, return true if the list
is circular, false if it is not.

--- Example
<br> const l = new List();
<br> const a = new Node('a');
<br> const b = new Node('b');
<br> const c = new Node('c');
<br> l.head = a;
<br> a.next = b;
<br> b.next = c;
<br> c.next = b;
<br> circular(l) // true

## Solution

```js
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
```
