var reverseString = function (s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  while (pointer1 < pointer2) {
    let temp = s[pointer1];
    s[pointer1] = s[pointer2];
    s[pointer2] = temp;

    pointer1++;
    pointer2--;
  }

  return s;
};

reverseString(["h", "e", "l", "l", "o"]);
