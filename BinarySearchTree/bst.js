class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(root, newNode) {
    if (newNode.key < root.key) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(root, key) {
    if (root == null) {
      return null;
    }

    if (key < root.key) {
      root.left = this.deleteNode(root.left, key);
    } else if (key > root.key) {
      root.right = this.deleteNode(root.right, key);
    } else {
      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        let tempNode = this.findMinNode(root.right);
        root.key = tempNode.key;
        root.right = this.deleteNode(root.right, tempNode.key);
      }
    }
    return node;
  }
}
