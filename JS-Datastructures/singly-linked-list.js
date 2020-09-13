// piece of data
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    if (!current) return undefined;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== i) {
      counter++;
      current = current.next;
    }
    return current;
  }

  set(i, val) {
    let specificNode = this.get(i);
    if (!specificNode) {
      specificNode.val = val;
      return true;
    }
    return false;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return !!this.push(val);
    if (i === 0) return !!this.unshift(val);

    let prev = this.get(i - 1);
    let newNode = new Node(val);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i > this.length) return undefined;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();

    let prev = this.get(i - 1);
    let removed = pre.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let list = new SinglyLinkedList();
list.push(30);
list.push(5);
list.push(99);
list.pop();
list.push(1000);
list.shift();
list.push(55);
list.unshift(-25);
list.set(0, 'head');
list.insert(0, 'FIRST');
list.remove(0);
list.reverse();

console.log(list);
