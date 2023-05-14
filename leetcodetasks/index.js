// var strStr = function (haystack, needle) {
//   const index = haystack.indexOf(needle);
//   return index >= 0 ? index : -1;
// };

// // console.log(strStr("sadbutsad", "sad"));


// var mySqrt = function (x) {
//   if (x === 0 || x === 1) {
//     return x;
//   }

//   let result = 0;
//   while (result * result <= x) {
//     result++;
//   }
//   return result - 1;
// };

// // console.log(mySqrt(64));


// function singleNumber(nums) {
//   let count = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (count[nums[i]] === undefined) {
//       count[nums[i]] = 1;
//     } else {
//       count[nums[i]] += 1;
//     }
//   }

//   for (let key in count) {
//     if (count[key] === 1) {
//       return parseInt(key);
//     }
//   }
// }


// // console.log(singleNumber([2, 2, 1]));
// // console.log(singleNumber([4, 1, 2, 1, 2]));

// function isHappy(n) {
//   let seen = new Set();
//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     let sum = 0;
//     while (n > 0) {
//       const digit = n % 10;
//       sum += digit * digit;
//       n = Math.floor(n / 10);
//     }
//     n = sum;
//   }
//   return n === 1;
// }

// // console.log(isHappy(2));


// String.prototype.insertplus = function () {
//   let mid = Math.floor(this.length / 2);
//   return this.slice(0, mid) + " + " + this.slice(mid);
// }

// // console.log("test".insertplus());



// Number.prototype.double = function () {
//   return this.valueOf() * 2;
// }

// // console.log((5).double());


// Array.prototype.push = function (element) {
//   return [...this, element];
// }

// // const arr = [1, 2, 3, 4, 5]
// // console.log(arr.push(6));



// function add(num) {
//   let total = 0;
//   function closure() {
//     total += num;
//     return total;
//   }
//   return closure;
// }


// // const addFive = add(5);
// // console.log(addFive());
// // console.log(addFive());



// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// }

// // const rectangle = new Rectangle(4,5);
// // console.log(rectangle.getArea());



// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.introduce = function () {
//   return "Name : " + this.name + " Age : " + this.age
// }

// // const person = new Person("Aytac",20);
// // console.log(person.introduce());



// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function () {
//   return this.name + " yemek yeyir ";
// }

// // const animal = new Animal("Luna");
// // console.log(animal.eat());



// Array.prototype.last = function () {
//   if (this.length == 0) {
//     return -1;
//   }
//   return this[this.length -1];
// }

// const a = [1,2,3,4]
// console.log(a.last());

function countPoints(rings) {
  let arr = rings.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >=0 && arr[i] <= 9) {
      if(arr[i-1] == "R" && arr[i-1] == "G" && arr[i-1] == "B"){
        console.log(1);
      }
      else{
        console.log(0);
      }
    }
  }
}

console.log(countPoints("B0R0G0R9R0B0G0"));


var sumOddLengthSubarrays = function (arr) {
  let sum = 0;

  for (let start = 0; start < arr.length; start++) {
      for (let end = start; end < arr.length; end += 2) {
          for (let i = start; i <= end; i++) {
              sum += arr[i];
          }
      }
  }

  return sum;
};