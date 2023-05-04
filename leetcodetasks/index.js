var strStr = function (haystack, needle) {
  const index = haystack.indexOf(needle);
  return index >= 0 ? index : -1;
};

console.log(strStr("sadbutsad", "sad"));


var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let result = 0;
  while (result * result <= x) {
    result++;
  }
  return result - 1;
};

console.log(mySqrt(64));


function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}


console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));

function isHappy(n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n === 1;
}

console.log(isHappy(2));