class Node {
  constructor(value) {
    this.value = value;
    this.tail = null;
    // this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

	// Constant time O(1)
  append(value) {
    const newNode = new Node(value);

    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

	// Constant time O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) return;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

	// Linear time O(n)
	insertAfter(value, afterValue){
		const existingNode = this.find(afterValue);
		if (existingNode) {
			const newNode = new Node(value)
			newNode.next = existingNode.next
		}
	}

	// Linear time O(n)
	find(value) {
		if (!this.head) return;
		
		let currentNode = this.head;
		
    while (currentNode) {
      if (currentNode.value === value) {
				console.log(`${value} found!`);
				return `${value} found!`
      } else {
        currentNode = currentNode.next;
      }
    }
		console.log(`${value} not found.`);
		return `${value} not found.`
	}

  toArray() {
    const elements = [];
    let currentNode = this.head;

    while (currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }
    return elements;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(4);
LinkedList1.append("asdf");
// LinkedList1.append(true);
LinkedList1.append(123.321);
LinkedList1.prepend("second item");
LinkedList1.prepend("first item");
LinkedList1.append(4);
console.log("LinkedList1:", LinkedList1.toArray());

LinkedList1.delete("first item");
LinkedList1.delete(4);
LinkedList1.find(4);
LinkedList1.find(1);

console.log("LinkedList1:", LinkedList1.toArray());
