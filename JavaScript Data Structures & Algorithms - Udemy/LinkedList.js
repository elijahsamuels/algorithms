class Node {
  constructor(value) {
    this.value = value;
    this.tail = null;
  }
}

class LinkedList {
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
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift() {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--; // or set to 0

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp;
    if (index < this.length / 2) {
      for (let i = 0; i < this.length; i++) {
        temp = this.head;
        temp = temp.next;
      } 
		} else {
			for (let i = this.length -1; i > this.length; i--) {
				temp = this.tail;
				temp = temp.prev;
			}
    }
    return temp;

    // if (index < 0 || index >= this.length) {
    //   return undefined;
    // }

    // let temp = this.head;
    // for (let i = 0; i < index; i++) {
    //   temp = temp.next;
    // }
    // return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
		const before = this.get(index - 1);
		const after = before.next
		before.next = newNode
		newNode.prev = before
		newNode.next = after
		after.prev = newNode
		this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    const temp = this.get(index);
		temp.prev.next = temp.next
		temp.next.prev = temp.prev
		temp.prev = null
		temp.next = null

		this.length--;
    return temp;
  }

  // reverse() {
  //   let temp = this.head;
  //   this.head = this.tail;
  //   this.tail = temp;

  //   let prev = null;
  //   let next = temp.next;
  //   for (let i = 0; i < this.length; i++) {
  //     next = temp.next;
  //     temp.next = prev;
  //     prev = prev.next;
  //     temp = next;
  //   }
  // 	return this
  // }
}

let x = new LinkedList();
x.push(2);
x.push(4);
x.push(6);
x.push(1);
x.push(3);
x.push(5);
x.get(2);
x.get(3);
