var containsDuplicate = function(nums) {
  // go thru array and check to see if it contains duplicate

  const hash = [];
  for (const num of nums) {
    if (hash[num]) {
      return true;
    }
    hash[num] = true;
  }
  return false;

  // hash = {}
  // for (let i = 0; i < nums.length; i++) {
  // 		if (hash[nums[i]]) {
  // 				return true
  // 		} else {
  // 				hash[nums[i]] = 1
  // 		}
  // }
  // return false
};

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 2, 3, 4, 5, 6]);
containsDuplicate([2, 14, 18, 22, 22]);
