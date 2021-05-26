class BinaryTree {
  constructor() {
    this.root = null;
  }
  addChild(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    } else {
      let currentNode = this.root;
      let added = false;
      while (!added) {
        if (value === currentNode.value) {
          return "Value exists in tree, no duplicates allowed";
        }
        if (value < currentNode.value) {
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value);
            added = true;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }
  removeChild(value) {
    let currentNode = this.root;
    let found = false;
    let nodeToRemove;
    let parentNode = null;
    if (currentNode.value === value) {
      this.root = null;
    }
    while (!found) {
      if (currentNode === null || currentNode.value === null) {
        return "Node not found";
      }
      if (value === currentNode.value) {
        nodeToRemove = currentNode;
        found = true;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.leftChild;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.rightChild;
      }
    }

    const isLeftNode = parentNode.leftChild === nodeToRemove;
    if (nodeToRemove.leftChild === null && nodeToRemove.rightChild === null) {
      isLeftNode
        ? (parentNode.leftChild = null)
        : (parentNode.rightChild = null);
    } else if (
      nodeToRemove.leftChild !== null &&
      nodeToRemove.rightChild === null
    ) {
      isLeftNode
        ? (parentNode.leftChild = nodeToRemove.leftChild)
        : (parentNode.rightChild = nodeToRemove.leftChild);
    } else if (
      nodeToRemove.leftChild === null &&
      nodeToRemove.rightChild !== null
    ) {
      isLeftNode
        ? (parentNode.leftChild = nodeToRemove.rightChild)
        : (parentNode.rightChild = nodeToRemove.rightChild);
    } else {
      const rightSubTree = nodeToRemove.rightChild;
      const leftSubTree = nodeToRemove.leftChild;
      isLeftNode
        ? (parentNode.leftChild = rightSubTree)
        : (parentNode.rightChild = rightSubTree);
      let currLeftNode = rightSubTree;
      let currLeftParent;
      let leftFound = false;
      while (!leftFound) {
        if (currLeftNode === null) {
          leftFound = true;
        } else {
          currLeftParent = currLeftNode;
          currLeftNode = currLeftNode.leftChild;
        }
      }
      currLeftParent.leftChild = leftSubTree;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}
