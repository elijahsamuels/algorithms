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

		insert(value) {
			const newNode = new Node(value);

			if (this.root === null) {
				this.root = newNode;
				return this;
			}

			let temp = this.root;
			while (true) {
				if (newNode.value === temp.value) return undefined;
				if (newNode.value < temp.value) {
					if (temp.left === null) {
						temp.left = newNode;
						return this;
					}
					temp = temp.left;
				} else {
					if (temp.right === null) {
						temp.right = newNode;
						return this;
					}
					temp = temp.right;
				}
			}
		}

		contains(value) {
			if (this.root === null) return false;
			let temp = this.root;

			while (temp) {
				if (value < temp.value) {
					temp = temp.left;
				} else if (value > temp.value) {
					temp = temp.right;
				} else {
					return true;
				}
			}
			return false;
		}

		breadthFirstSearch = () => {
			let currentNode = this.root;
			let queue = [];
			let results = [];
			queue.push(currentNode);

			while (queue.length) {
				currentNode = queue.shift();
				results.push(currentNode.value);
				if (currentNode.left !== null) queue.push(currentNode.left);
				if (currentNode.right !== null) queue.push(currentNode.right);
			}

			return results;
		};
		
		depthFirstSearchPreOrder = () => {
			let results = [];
			const traverse = (currentNode) => {
				results.push(currentNode.value);
				if (currentNode.left) traverse(currentNode.left);
				if (currentNode.right) traverse(currentNode.right);
			};
			traverse(this.root);
			return results;
		};
		
		depthFirstSearchPostOrder = () => {
			let results = [];
			const traverse = (currentNode) => {
				if (currentNode.left) traverse(currentNode.left);
				if (currentNode.right) traverse(currentNode.right);
				results.push(currentNode.value);
			};
			traverse(this.root);
			return results;
		};

		depthFirstSearchInOrder = () => {
			let results = [];
			const traverse = (currentNode) => {
				if (currentNode.left) traverse(currentNode.left);
				results.push(currentNode.value);
				if (currentNode.right) traverse(currentNode.right);
			};
			traverse(this.root);
			return results;
		};
		
	}

	let myTree = new BinarySearchTree()
	myTree.insert(47)
	myTree.insert(21)
	myTree.insert(76)
	myTree.insert(18)
	myTree.insert(27)
	myTree.insert(52)
	myTree.insert(82)

	/**   ** myTree **
	 * 	       47
	 *        /  \
	 *      21    76
	 *     / \    / \
	 *    18 27  52 82
	 */

	// myTree.breadthFirstSearch() // [47,21,76,18,27,52,82]
	// myTree.depthFirstSearchPreOrder() // [47,21,18,27,76,52,82]
	// myTree.depthFirstSearchPostOrder() // [18,27,21,52,82,76,47]
	myTree.depthFirstSearchInOrder() // [18,21,27,47,52,76,82]