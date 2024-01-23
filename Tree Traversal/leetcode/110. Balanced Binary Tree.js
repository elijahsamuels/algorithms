/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * A height-balanced binary tree is defined as a binary tree in which the height of the left and the right subtree of any node differ by not more than 1.
 *
 * Conditions for Height-Balanced Binary Tree:
 * Following are the conditions for a height-balanced binary tree:
 *
 * The difference between the heights of the left and the right subtree for any node is not more than one.
 * The left subtree is balanced.
 * The right subtree is balanced.
 * Note: An empty tree is also height-balanced.
 */

/**
 * [1,2,2,3,3,null,null,4,4]
 * 						1
 * 					/   \
 * 				2			 2
 * 			 / \    / \
 * 			3   3  n	 n
 *		 / \
 * 		4   4
 *
 *
 */

/**
 *  * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = (root) => {
  if (!root) return true;
	
  const getHeight = (node) => {
    if (!node) return 0;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  const checkBalance = (node) => {
    if (!node) return true;

    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return checkBalance(node.left) && checkBalance(node.right);
  };

  return checkBalance(root);
};
