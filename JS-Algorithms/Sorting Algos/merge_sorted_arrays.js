function mergeSortedArrays(arr1, arr2) {
  // Create an empty array, take a look at the smallest values in each input
  let res = [];
  let i = 0;
  let j = 0;

  // While there are still values we haven't looked at...
  while (i < arr1.length && j < arr2.length) {
    // If the value in the first array is smaller,
    // push the value in the first array into our results and move on to the next value in the first array
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      // If the value in the first array is larger,
      // push the value in the second array into our results and move on to the next value in the second array
      res.push(arr2[j]);
      j++;
    }
  }
  // Once we exhaust one array, push in all remaining values from the other array
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

console.log(mergeSortedArrays([], [3, 4, 8, 10, 25]));
