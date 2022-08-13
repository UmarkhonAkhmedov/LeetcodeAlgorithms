var twoSum = function (numbers, target) {
  // let newArray = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = 0; j < numbers.length; j++) {
  //     if (numbers[i] + numbers[j] === target) {
  //       newArray.push([i + 1, j + 1]);
  //     }
  //   }
  // }
  // console.log(newArray[0]);
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }

  return [p1 + 1, p2 + 1];
};

twoSum([0, 0, 3, 4], 0);
