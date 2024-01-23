/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
// 	if (root === null) return [];
//   let currentNode = root;
//   let queue = [];
//   let results = [];
//   queue.push(currentNode);

//   while (queue.length) {
//     currentNode = queue.shift();
//     results.push(currentNode.value);
//     if (currentNode.left !== null) queue.push(currentNode.left);
//     if (currentNode.right !== null) queue.push(currentNode.right);
//   }

//   return results;
// };

// 1. Initialize: Create an empty result array to store the level order traversal.
// 2. Use a Queue: Use a queue to perform a breadth-first traversal. Start by enqueueing the root node into the queue.
// 3. Iterate with Queue: While the queue is not empty, do the following:
// - Dequeue the front node from the queue.
// - Add the value of the dequeued node to the current level list.
// - Enqueue the left and right children of the dequeued node (if they exist).
// 4. Add Levels to Result: After processing each level, add the current level list to the result array.
// 5. Repeat Until Queue is Empty: Continue these steps until the queue becomes empty.

// Two arrays: result and currentLevel
// result is the final return, and currentLevel is pushed into the result at the end of each level
// if the currentNode has children (left or right), push those into the currentLevel

const levelOrder = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelLength = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelLength; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currentLevel);
  }

  return result;
};
