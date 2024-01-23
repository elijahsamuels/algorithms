const depthFirstSearchInOrder = () => {
  let results = [];
  const traverse = (currentNode) => {
		if (currentNode.left) traverse(currentNode.left);
    results.push(currentNode.value);
    if (currentNode.right) traverse(currentNode.right);
  };
  traverse(this.root);
  return results;
};

	/**   ** myTree **
	 * 	       47
	 *        /  \
	 *      21    76
	 *     / \    / \
	 *    18 27  52 82
	 */

// result: [18,21,27,47,52,76,82]