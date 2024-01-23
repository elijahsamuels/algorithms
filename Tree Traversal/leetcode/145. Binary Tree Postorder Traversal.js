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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
	if (root === null) return [];
	let results = [];
	const traverse = (currentNode) => {
			if (currentNode.left) traverse(currentNode.left);
			if (currentNode.right) traverse(currentNode.right);
			results.push(currentNode.val);
	};
	traverse(root);
	return results;

};