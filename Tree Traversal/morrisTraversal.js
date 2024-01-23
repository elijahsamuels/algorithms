const inorderTraversal = function(root) {
	const ans = [];
	let curr = root;
	let prev = null;

	while(curr !== null) {
			if(curr.left === null) {
					ans.push(curr.val)
					curr = curr.right;
			} else {
					prev = curr.left;
					while(prev.right !== null && prev.right !== curr) {
							prev = prev.right;
					}

					if(prev.right === curr) {
							prev.right = null;
							ans.push(curr.val)
							curr = curr.right;
					} else {
							prev.right = curr;
							curr = curr.left
					}
			}
	}
	return ans;
};
