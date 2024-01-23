const BFS = () => {
	let currentNode = this.root
	let queue = []
	let results = []
	queue.push(currentNode)

	while (queue.length) {
		currentNode = queue.shift()
		results.push(currentNode.value)
		// if (currentNode.left !== null) queue.push(currentNode.left);
		if (currentNode.left) queue.push(currentNode.left);
		// if (currentNode.right !== null) queue.push(currentNode.right);
		if (currentNode.right) queue.push(currentNode.right);
	}

return results
}