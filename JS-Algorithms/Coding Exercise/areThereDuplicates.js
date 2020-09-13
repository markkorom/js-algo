function areThereDuplicates() {
  let i = 0;
  let sortedArgs = Object.values(arguments).sort();

  for (var j = 1; j < arguments.length; j++) {
    if (sortedArgs[i] === sortedArgs[j]) {
      return true;
    }
    i++;
  }
  return false;
}

// One liner
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
