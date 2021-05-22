{
    /*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
}

let nums = [1, 2, 3, 4, 5, 7, 11, 12];
let target = 10;

// BRUTE FORCE approach. O(n^2)
// twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// twoSum(nums, target);

// ##############
// two passes. Time = O(n)

// twoSum = (nums, target) => {
//     const indices = {};
//     for (let i = 0; i < nums.length; i++) {
//         indices[nums[i]] = i;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const comp = target - nums[i];
//         if (indices[comp] !== undefined && i !== indices[comp]) {
//             return [i, indices[comp]];
//         }
//     }
// };

// twoSum(nums, target);

// ##############
// One pass. Time = O(n)

// twoSum = (nums, target) => {
//     const indices = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const comp = target - nums[i];

//         if (indices.has(comp)) {
//             return [indices.get(comp), i];
//         }
//         indices.set(nums[i], i);
//     }
// };

// twoSum(nums, target);

twoSum = (nums, target) => {
    const indices = {};
    let i = 0;
    const len = nums.length;
    for (i; i < len; i++) {
        const complement = target - nums[i];

        if (complement in indices) {
            indices[2];
            return [indices[complement], i];
        } else indices[nums[i]] = i;
    }
};

// twoSum = (nums, target) => {
//     const indices = {}; // make an empty object
//     let i = 0;
//     const len = nums.length; // set the length of the arry here so that the for loop doesnt have to calculate it each time.
//     for (
//         i;
//         i < len;
//         i++ // iterate through the array based on the variable len, incrementing by 1 (i++)
//     ) {
//         const complement = target - nums[i]; // complement is the remainer of the target (10) minus the instance from the array (i)

//         if (complement in indices) {
//             // true/false: the complement number is in the indicies array
//             indices[2]
//             return [indices[complement], i]; // returns number from the indices array and, the iteration number
//         } else
//         indices[nums[i]] = i;
//     }
// };

// BAD
twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
twoSum(nums, target);

// FASTEST
twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
twoSum(nums, target);

// LOWEST MEMORY
twoSum = (nums, target) => {
    if (nums.length === 2) return [0, 1];
    const hTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hTable) return [hTable[nums[i]], i];
        else hTable[target - nums[i]] = i;
    }
};
twoSum(nums, target);


// MEMORY HOG!

var twoSum = function(nums, target) {
    const dis = {};
    for(let i = 0; i < nums.length; ++i){
        dis[target - nums[i]] = i;
    }
    
    const res = [];
    for(let i = 0; i < nums.length; ++i){
        if(dis[nums[i]] !== undefined && dis[nums[i]] !== i){
            res.push(i, dis[nums[i]]);
            break;
        }
    }
    
    return res;
};
