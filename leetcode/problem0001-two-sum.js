/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const n = nums[i];

    if (map[target - n] >= 0) {
      return [map[target - n], i];
    } else {
      map[n] = i;
    }
  }
};

// Testcase
console.log(twoSum([2, 7, 11, 25], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
