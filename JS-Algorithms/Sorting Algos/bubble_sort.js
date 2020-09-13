function bubbleSort(arr) {
  // Start looping a variable called i the end of the array towards the beginning
  for (let i = arr.length; i > 0; i--) {
    // Optimized with noSwaps
    let noSwaps = true;
    // Start inner loop with a variable called j from the beginning until i-1
    for (let j = 0; j < i - 1; j++) {
      // If arr[j] is greater than arr[j+1], swap those values!
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  // return sorted array
  return arr;
}

console.log(bubbleSort([10, 52, 1, 6, 4])); // [1, 4, 6, 10, 52]
console.log(bubbleSort([10, 52, 1, 6, 4, 48, 99, 13, 2])); // [1, 2, 4, 6, 10, 13, 48, 52, 99]
console.log(bubbleSort([10, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 4, 6, 10, 13, 48, 52, 99]
