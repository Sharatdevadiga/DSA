class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.length;
  }

  getValues() {
    let result = [];
    let current = this.head;

    while (current != null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  pop() {
    if (!this.head) return undefined;

    let prev = null;
    let current = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    if (this.length === 0) this.tail = null;

    return current;
  }

  shift() {
    if (this.head === null) return undefined;

    let current = this.head;
    this.head = current.next;
    current.next = null;
    this.length--;

    if (this.length === 0) this.tail = null;

    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return ++this.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter === pos) {
      current = current.next;
      counter += 1;
    }

    return current;
  }

  set(pos, newVal) {
    let node = this.get(pos);
    if (node) {
      node.val = newVal;
      return true;
    }
    return false;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;

    if (pos === 0) {
      this.unshift(val);
    } else if (pos === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(pos - 1);
      let temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
    }
    return true;
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) return undefined;

    if (pos === 0) return this.shift();

    if (pos === this.length - 1) return this.pop();

    let prevVal = this.get(pos - 1);
    let current = prevVal.next;
    prevVal.next = current.next;
    current.next = null;
    this.length--;
    return current;
  }

  reverse() {
    let prev = null;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;

    while (node != null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
