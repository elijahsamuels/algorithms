{
    /*
    https://leetcode.com/problems/merge-two-sorted-lists/
    
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.



*/
}

// const l1 = [1, 2, 4, 5];
// const l2 = [1,3,4,6]
const l1 = [0];
const l2 = [];

mergeTwoLists = (l1, l2) => {
    return [...l1, ...l2].sort((a,b) => a-b).filter((a,b) =>  );
    // if (l1.length != 0 && l2.length != 0) {
    // }
};

mergeTwoLists(l1, l2);

console.log(mergeTwoLists([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8])
console.log(mergeTwoLists([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10]);
console.log(mergeTwoLists([1,3,5,7,9,11,12], [1,2,3,4,5,10,11,12]), [1,2,3,4,5,7,9,10,11,12]);
