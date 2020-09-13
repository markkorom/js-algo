function stringSearch(long, short) {
  let count = 0;
  // loop over the longer string
  for (let i = 0; i < long.length; i++) {
    // loop over shorter string
    for (let j = 0; j < short.length; j++) {
      // If charachter don't match, break out of inner loop
      if (long[i + j] !== short[j]) break;
      // if inner loop is complete, increment the count of matches
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("lnogfhfghfngn", "ng")); // 1
console.log(stringSearch("lol in wow is not", "l i")); // 1
