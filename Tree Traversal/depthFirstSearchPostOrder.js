const depthFirstSearchPostOrder = () => {
  let results = [];

  const traverse = (currentNode) => {
		if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
    results.push(currentNode.value);
  };
  traverse(this.root);
  return results;
};



// const depthFirstSearchPostOrder = (tree) => {
// 	const root = tree[0]
//   let results = [];
//   const traverse = (currentNode) => {
//     results.push(currentNode.value);
//     if (currentNode.left) traverse(currentNode.left);
//     if (currentNode.right) traverse(currentNode.right);
//   };
	
//   traverse(root);
//   return results;
// };
