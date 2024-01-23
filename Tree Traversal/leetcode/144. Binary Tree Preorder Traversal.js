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
var preorderTraversal = function(root) {
	if (root === null) return [];
let results = [];
const traverse = (currentNode) => {
	results.push(currentNode.val);
	if (currentNode.left) traverse(currentNode.left);
	if (currentNode.right) traverse(currentNode.right);
};
traverse(root);
return results;
};