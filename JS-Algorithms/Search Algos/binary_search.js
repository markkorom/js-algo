// function binarySearch(arr, val) {
//   // pointer to the left
//   let left = 0;
//   // pointer to the right
//   let right = arr.length - 1;
//   // poninter to the middle
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== val && left <= right) {
//     if (arr[middle] > val) {
//       right = middle - 1;
//     } else if (arr[middle] < val) {
//       left = middle + 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }

//   if (arr[middle] === val) {
//     return middle;
//   }

//   return -1;
// }

function binarySearch(arr, val) {
  // pointer to the left
  let left = 0;
  // pointer to the right
  let right = arr.length - 1;
  // poninter to the middle
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (arr[middle] > val) right = middle - 1;
    else if (arr[middle] < val) left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
