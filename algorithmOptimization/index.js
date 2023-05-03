function findIntersection(arr1, arr2) {
    let intersection = [];
    if (arr1.length === 0 || arr2.length === 0) {
        return intersection;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intersection.push(arr1[i]);
            }
        }
    }
    return intersection;
}

console.log(findIntersection([1, 2, 3, 4], [8, 4, 5, 3]));


function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/ig, ' ').toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('ana'));


function primeNumber(num) {
    if (num === 1) {
        console.log("Ne sadedi,ne murekkeb");
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;

}

console.log(primeNumber(32));


function isPositive(num) {
    if (num > 0) {
        return num * num;
    }
    return 0;

}

console.log(isPositive(-9));


function findFirstNonRepeatedChar(str) {
    let charCounts = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCounts[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(findFirstNonRepeatedChar([1, 2, 3, 4, 3, 1, 2]));
