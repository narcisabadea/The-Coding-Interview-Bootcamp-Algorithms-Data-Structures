// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

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

module.exports = Queue;
