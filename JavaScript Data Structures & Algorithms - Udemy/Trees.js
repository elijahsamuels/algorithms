// Full Tree: every node points to 2 nodes (left and right) or 0 nodes
// Full Perfect Tree: every node points to 2 nodes (left and right) or 0 nodes, AND every line is equally full

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

	insert(value){
		const newNode = new Node(value);
		
		if (this.root === null) {
			this.root = newNode;
			return this
		}

		let temp = this.root;
		while (true){ 
			if (newNode.value === temp.value) return undefined
			if (newNode.value < temp.value) {
				if (temp.left === null){
					temp.left = newNode
					return this
				} 
				temp = temp.left;
			} else {
				if (temp.right === null){
					temp.right = newNode
					return this
				} 
				temp = temp.right
			}
		}
	}

	contains(value){ 
		if (this.root === null) return false;
		let temp = this.root

		while(temp) {
			if (value < temp.value) {
				temp = temp.left
			} else if (value > temp.value){
				temp = temp.right;
			} else {
				return true
			}
		}
		return false
	}


}
