class Stack {
  // initialize emplty stack at the begining
  constructor() {
    this.stack = [];
  }

  // Pushing data to the stack
  push(data) {
    this.stack.push(data);
  }

  // Popping data from the stack
  pop() {
    this.stack.pop();
  }

  // Peek - return top element of stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // isEmpty
  isEmpty() {
    return this.stack.length === 0;
  }

  // Size - return size
  size() {
    return this.stack.length;
  }

  // Clear the stack
  clear() {
    this.stack = [];
  }

  // Contains - does this element contains the stack
  contains(data) {
    return this.stack.includes(data);
  }

  // reverse the stack
  reverse() {
    this.stack.reverse();
  }

  // print stack
  printStack() {
    let str = this.stack.map((element) => element + "\n");
    return str.join("");
  }
}

// Usage

let myStack = new Stack();
console.log("initial stack", myStack);
myStack.push(1);
myStack.push(2);
console.log("peek", myStack.peek());
console.log("print\n", myStack.printStack());

// peek 2
// print
// 1
// 2
