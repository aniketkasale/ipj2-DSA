class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at the beginning
// - Take data
// - convert into node
// - add new node to the head
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// Insert at the end
// - Take data
// - Create New Node
// - Check if List is Empty:
//    - If the list has no head (i.e., head is null), set the head to the new node.
// - Traverse to the End
//   - If the list has a head, initialize a variable last to the head node.
//   - While last.next is not null, move last to last.next.
//   - Once last.next is null, you have reached the end of the list.
//   - Insert the New Node: Set last.next to the new node.
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

// Insert at the given node(prevNode).
// Take data
// Create new node
// Set New Node's Next: Set the new node's next to the next of prevNode.
// Set prevNode's Next: Set the next of prevNode to the new node.
LinkedList.prototype.insterAfter = function (prevNode, data) {
  if (!prevNode) return "prev node cannot be null";
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// Delete the first node
// Check if List is Empty: If the list is empty (i.e., head is null), return as there is nothing to delete.
// Set Head to Next Node: Set the head to the next node (head.next), effectively removing the first node from the list.
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) return;
  this.head = this.head.next;
};

// Delete the last node
// Check if List is Empty: If the list is empty (i.e., head is null), return as there is nothing to delete.
// Check if Head is the Only Node: If the head is the only node in the list (i.e., head.next is null), set head to null to remove the node.
// To delete last node we will have to find second last
// Find the Second Last Node
// - Initialize a variable slast to the head node.
// - Traverse the list to find the second last node. Continue moving slast to slast.next while slast.next.next is not null.
// - Once the second last node is found, set slast.next to null to remove the last node from the list.
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) return;
  if (!this.head.next) {
    this.head = null;
  }
  let slast = this.head;
  while (slast.next.next) {
    slast = slast.next;
  }
  slast.next = null;
};

// Delete by key
// Check if List is Empty: If the list is empty (i.e., head is null), return as there is nothing to delete.
// Check if Head is the Key Node:
//  - If the head node's data matches the key, update head to head.next to remove the head node.
// Find and Delete the Key Node
//  - Initialize a variable current to the head node.
//  - Traverse the list to find the node with the given key
//    - Move current to current.next until current.next is null or current.next.data matches the key.
//    - If current.next.data matches the key, set current.next to current.next.next to bypass and remove the node with the key.
//  - If the key is not found after traversing the list, return 'key not found'.

LinkedList.prototype.deteleByKey = function (key) {
  if (!this.head) return;
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (current.next) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  return "Key not found";
};

// Search by key
LinkedList.prototype.searchByKey = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// Print /traverse
LinkedList.prototype.printList = function (key) {
  let current = this.head;
  let list = [];
  while (current) {
    list.push(current);
    current = current.next;
  }
  console.log(list.join(","));
};

// Reverse Linked list
LinkedList.prototype.reverse = function () {
  let current = this.head;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
};
