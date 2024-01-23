https://leetcode.com/discuss/study-guide/1212004/binary-trees-study-guide

Prerequisites that you should be familiar with before : Recursion, stack, queue

A basic instinct for solving DFS based questions is to do a recursive call and for all BFS(level order traversal) is to make queue and iterate, but also think upon how to iterate in DFS(Hint think on stack) and recurse in BFS based.

First of all you should look at traversal problems:

Inorder Traversal
Preorder Traversal
PostOrder Traversal
Level Order Traversal
A variation for LevelOrder can be: ZigZag level order traversal and Binary Tree Level Order Traversal II
Solving these questions will help you get familiarized with basic btree dfs and bfs traversals.

Intuition for Level Order Traversal iteratively using queue:

Construct a queue of type: TreeNode queue<TreeNode* > q, initially push the given root in it.
Iterate through the queue until empty:
Store the current size of queue tempSize, this will be the size of the current level of the tree.
Now we need to traverse this level so iterate for tempSize>=0 :
Pop the current element and apply the needed operation for the same and if left or right child exist then pass them to the queue.
Now, some basic Binary Tree problems that will help your thinking process:

Same Tree
Symmetric Tree
Maximum Depth of Binary Tree
Balanced Binary Tree
Minimum Depth of Binary Tree
Merge Two Binary Trees
Diameter of Binary Tree
Binary Tree Tilt
Invert Binary Tree
Binary Search Tree: Use the property of BST judiciously (the left subtree will always contain nodes with value less than root's value and right subtree will contain nodes with value greater than root's value)

Search in a Binary Search Tree
Two Sum IV - Input is a BST
Minimum Absolute Difference in BST
Range Sum of BST
Delete Node in a BST
Trim a Binary Search Tree
Insert into a Binary Search Tree
Kth Smallest Element in a BST
All Elements in Two Binary Search Trees
Path problems: You are given root, you have to perform operations on a path, (path is root to leaf). Think upon the type of traversal you will apply when going from root to leaf:

Binary Tree Paths
Path Sum
Path Sum II
Sum root to leaf numbers
Binary Tree Maximum Path Sum
*Path Sum III
*Pseudo-Palindromic Paths in a Binary Tree
*Last two problems here are utmost important
Next is, given a combination of preorder, postorder and inorder traversals, you need to construct a binary tree/BST:
Hint: Observe in each traversal method, position of root and head of right and left subtrees

Construct Binary Tree from Preorder and Inorder Traversal
Construct Binary Tree from Inorder and Postorder Traversal
Construct Binary Tree from Preorder and Postorder Traversal
Convert Sorted Array to Binary Search Tree
Construct Binary Search Tree from Preorder Traversal
View problems: Try thinking for left, bottom and top too!
Binary Tree Right Side View

Lowest Common Ancestor problems: You are given two nodes and you have to return their ancestor at as least depth possible, these are problems are a must todo:

Lowest Common Ancestor of a Binary Tree
Lowest Common Ancestor of a Binary Search Tree
Lowest Common Ancestor of Deepest Leaves
Validate trees:

Validate Binary Tree Nodes
Validate Binary Search Tree
Some miscellaneous problems that you should definitely look through:

Flatten Binary Tree to Linked List
Count Complete Tree Nodes
Maximum Width of Binary Tree
Check Completeness of a Binary Tree
Cousins in Binary Tree
Maximum Difference Between Node and Ancestor
Number of Good Leaf Nodes Pairs
Smallest Subtree with all the Deepest Nodes
All Nodes Distance K in Binary Tree
Find a Corresponding Node of a Binary Tree in a Clone of That Tree
Vertical Order Traversal of a Binary Tree
I will be updating this list on finding more important questions or any pattern that I find.

