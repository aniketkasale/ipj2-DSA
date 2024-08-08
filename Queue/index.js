class Queue {
  // initialize emplty queue at the begining
  constructor() {
    this.queue = [];
  }

  // enqueue - adding data
  enqueue(data) {
    this.queue.push(data);
  }

  // isEmpty
  isEmpty() {
    return this.queue.length === 0;
  }

  // dequeue - removing data
  dequeue() {
    if (this.isEmpty()) return "queue is empty";
    this.queue.shift();
  }

  // Peek - return first element of queue
  peek() {
    return this.queue[0];
  }

  // size
  size() {
    return this.queue.length;
  }

  // clear
  clear() {
    this.queue = [];
  }

  // printQueue
  printQueue() {
    let str = this.queue.map((element) => element + "\n");
    return str.join("");
  }
}

// Usage
let myQueue = new Queue();
console.log("initial Queue", myQueue);
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log("peek", myQueue.peek());
console.log("print\n", myQueue.printQueue());

// peek 1
// print
// 1
// 2
