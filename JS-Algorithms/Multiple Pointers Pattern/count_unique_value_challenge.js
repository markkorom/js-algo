function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  i = 0;
  j = 1;
  lookupNum = arr[i];

  while (j < arr.length) {
    if (lookupNum !== arr[j]) {
      lookupNum = arr[j];
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-2, -1, 0, 1]));
