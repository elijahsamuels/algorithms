export class Node {
	// public tail: number;
	public value: number;
	public tail: Node | null;
	
	constructor(value: number) {
    this.value = value;
    this.tail = null;
  }
}

export default class SinglyLinkedList<T> {
	public head: Node | null;
	public tail: Node | null;
	public length: number;

    constructor() {
			const newNode = new Node()	
			this.head = newNode
			this.tail = newNode
			this.length = 1
		}

		get(idx: number): T | undefined {

			return;
		}
    prepend(item: T): void {
        // Constant time O(1)
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {
        return;
    }
    removeAt(idx: number): T | undefined {
        return;
    }
}
