const invertTree = (root) => {
  if (!root) return null;
  let queue = [root];

  while (queue.length) {
    let currentNode = queue.shift();

    let temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return root;
};
