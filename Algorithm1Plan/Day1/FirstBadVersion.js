var solution = function (isBadVersion) {
  return function (n) {
    let i = 1;
    let j = n;
    while (i <= j) {
      const middle = Math.floor((i + j) / 2);
      if (isBadVersion(middle)) {
        j = middle - 1;
      } else {
        i = middle + 1;
      }
    }
    return i;
  };
};
