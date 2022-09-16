var sortedSquares = function (nums) {
  let newArray = [];

  for (let i = 0; i < nums.length; i++) {
    newArray.push(nums[i] ** 2);
  }
  const sorted = newArray.slice().sort((a, b) => a - b);
  return sorted;
};

nums = [-4, -1, 0, 3, 10];
sortedSquares(nums);
