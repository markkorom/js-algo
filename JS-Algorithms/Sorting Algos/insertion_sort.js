function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Start by picking the second element
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([8, 4, 9, 15, 1, 20]));
