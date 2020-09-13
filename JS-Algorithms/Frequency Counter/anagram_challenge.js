function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = [...str1];
  str2 = [...str2];

  charNums1 = {};
  charNums2 = {};

  for (let i in str1) {
    let letter = str1[i];
    charNums1[letter] = (charNums1[letter] || 0) + 1;
  }
  for (let i in str2) {
    let letter = str2[i];
    if (!charNums1[letter]) {
      return false;
    } else {
      charNums1[letter] -= 1;
    }
  }
  return true;
}

//   for (let key in charNums2) {
//     let letter = str2[i];
//     console.log(`${key} : ${key in charNums2}`);
//     // if (!(key in charNums2)) {
//     //   return false;
//     // }
//   }

//   return true;
// }

console.log(validAnagram("catfaf", "tcaaff"));
