function increasing(arr) {
    const odd = arr.filter(num => num % 2 !== 0);
    const even = arr.filter(num => num % 2 === 0);
    const increasingNumbers = [...odd.sort((a, b) => a - b), ...even.sort((a, b) => a - b)];
    return increasingNumbers;
}

console.log(increasing([7, 2, 9, 4, 5, 10, 1, 3, 6, 8]));


const denominations = [5, 10, 20, 50, 100, 200, 500];

function dispenseNotes(amount) {
    let notes = [];
    for (let i = denominations.length - 1; i >= 0; i--) {
        while (amount >= denominations[i]) {
            amount -= denominations[i];
            notes.push(denominations[i]);
        }
    }
    return notes;
}

console.log(dispenseNotes(1900));
console.log(dispenseNotes(203));
console.log(dispenseNotes(101));
console.log(dispenseNotes(1300));

function sortSentence(s) {
    const words = s.split(" ");
    words.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    const sortedWords = words.map((word) => word.replace(/\d/g, ""));
    return sortedWords.join(" ");
}

console.log(sortSentence("is2 sentence4 This1 a3"));



function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        else if (target < nums[i]) {
            return i;
        }
    }
    return nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 4));

function canBeIncreasing(nums) {
    const n = nums.length;

    if (n < 3) {
        return true;
    }

    for (let i = 0; i < n; i++) {
        const temp = nums[i];
        nums.splice(i, 1);
        let isIncreasing = true;
        for (let j = 1; j < n - 1; j++) {
            if (nums[j] <= nums[j - 1] || nums[j] >= nums[j + 1]) {
                isIncreasing = false;
                break;
            }
        }

        if (isIncreasing) {
            return true;
        }
        nums.splice(i, 0, temp);
    }
    return false;
}

console.log(canBeIncreasing([1, 2, 10, 4, 5]));

function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i-1] === 0) &&
            (i === flowerbed.length-1 || flowerbed[i+1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
        if (count >= n) {
            return true;
        }
    }
    return false;
}

console.log(canPlaceFlowers([1,0,0,0,1],1));
