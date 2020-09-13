function swap(arr, swapIndex, i) {
  [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  // Swap the pivot from the start with the swapIndex
  swap(arr, swapIndex, start);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // return index of pivot value position in the array
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([15, 8, 20, 1, 30, 10]));
