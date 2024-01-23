# // https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/

# /**
#  * Definition for a binary tree node.
#  * function TreeNode(val, left, right) {
#  *     this.val = (val===undefined ? 0 : val)
#  *     this.left = (left===undefined ? nil : left)
#  *     this.right = (right===undefined ? nil : right)
#  * }
#  */
# /**
#  * @param {TreeNode} root
#  * @return {number[]}
#  */
def inorderTraversal(root)
	if (root == nil)
		return []
	end

	results = [];
	def traverse(currentNode) 
			if (currentNode.left) 
				traverse(currentNode.left);
			end

			results.push(currentNode.val);
			
			if (currentNode.right)
				traverse(currentNode.right);
			end

	traverse(root);
	return results;

end