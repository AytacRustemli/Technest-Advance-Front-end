function linearSearch(arr, num) {
  for (let i in arr) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 6, 5, 13, 14, 15, 17], 13));


function binarySearch(arr, num) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let midIndex = Math.floor((firstIndex + lastIndex) / 2);

  while (arr[midIndex] != num && firstIndex < lastIndex) {
    if (num > arr[midIndex]) {
      firstIndex = midIndex + 1;
    }
    else if (num < arr[midIndex]) {
      lastIndex = midIndex - 1;
    }
    midIndex = Math.floor((firstIndex + lastIndex) / 2);
  }

  return (arr[midIndex] != num) ? -1 : midIndex;
}

console.log(binarySearch([1, 6, 5, 13, 14, 15, 17], 15));


function bubbleSort(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength - 1; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 6, 5, 13, 14, 15, 17]));


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr
}

console.log(selectionSort([1, 6, 5, 13, 14, 15, 17]));


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([1, 6, 5, 13, 14, 15, 17]));


function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    }
    else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  };
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 6, 5, 13, 14, 15, 17]));


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    }
    else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([1, 6, 5, 13, 14, 15, 17]));