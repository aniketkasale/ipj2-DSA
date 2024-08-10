class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtStart = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head) {
    this.head.prev = newNode;
  }

  this.head = newNode;

  if (!this.tail) {
    this.tail = newNode;
  }

  return newNode;
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  if (this.tail) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (!this.tail) {
    this.head = newNode;
  }

  return newNode;
};

DoublyLinkedList.prototype.insertAfter = function (data, prev) {
  if (!prev) {
    return "Invalid Prev node";
  }

  const newNode = new Node(data, prev.next, prev);

  if (prev.next) {
    prev.next.prev = newNode;
  }

  prev.next = newNode;

  if (!prev.next) {
    this.tail = newNode;
  }

  return newNode;
};

DoublyLinkedList.prototype.deleteFirst = function (data, prev) {
  if (!this.head) {
    return null;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};
