var reverseWords = function (s) {
  let arrStr = s.split(" ");
  let result = [];
  for (const item of arrStr) {
    result.push(item.split("").reverse().join(""));
  }

  return result.join(" ");
};

reverseWords("Let's take LeetCode contest");
