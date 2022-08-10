function search(nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }

  return nums.length;
}

console.log(search([1, 3, 5, 6], 5));
