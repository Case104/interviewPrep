class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return null;
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      let currentNode = this.head;
      const nodeToRemove = this.tail;
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === nodeToRemove) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let currentNode = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isEmpty() {
    return this.nodeList.length === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
