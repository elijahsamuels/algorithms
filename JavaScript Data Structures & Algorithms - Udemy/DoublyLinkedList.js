class Node {
  constructor(value) {
    this.value = value;
    this.tail = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
		this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift() {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--; // or set to 0

    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
    // if (index < 0 || index >= this.length) {
    //   return undefined;
    // }
    // const newNode = new Node(value);
    // // let temp =  this.head;
    // for (let i = 0; i < index; i++) {
    //   if (index === this[i]) {
    //     this[i] = newNode;
    //   }
    // }
    // return newNode;
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next; // this.get(index)
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index < 0 || index > this.length) {
      return undefined;
    }

    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = temp.next;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = prev.next;
      temp = next;
    }
		return this
  }
}

let x = new DoublyLinkedList();
x.push(2);
x.push(4);
x.push(6);
x.push(1);
x.push(3);
x.push(5);
x.get(2);
x.get(3);
