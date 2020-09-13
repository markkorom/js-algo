// function getDigit(num, place) {
//   let numArr = [...num.toString()];
//   let numIndex = numArr.length - 1;
//   if (numIndex < place) return 0;
//   let numStr = numArr[numIndex - place];
//   return Number(numStr);
// }

// Helpers ***
// Sick one liner
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

// console.log(getDigit(12345, 0)); // 5
// console.log(digitCount(154)); // 3
// console.log(mostDigits([34, 5678, 1, 2, 25, 100, 10258, 2020])); // 5

function radixSort(arr) {
  // Figure out how many digits the largest number has
  let maxDigitCount = mostDigits(arr);
  // Loop from k=0 up to this largest num of digits
  for (let i = 0; i < maxDigitCount; i++) {
    // Create buckets for each digits
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digitIndex = getDigit(arr[j], i);
      // Place each num in a corresponding buckets, starting with 0 and going up to 9
      buckets[digitIndex].push(arr[j]);
    }
    arr = buckets.flat();
  }
  // Return list
  return arr;
}

console.log(radixSort([10, 40, 5, 15, 6, 4545, 3]));
