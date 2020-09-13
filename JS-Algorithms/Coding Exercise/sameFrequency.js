function sameFrequency(num1, num2) {
  num1 = [...num1.toString()];
  num2 = [...num2.toString()];

  if (num1.length !== num2.length) {
    return false;
  }

  num1arr = num1.map(x => +x);
  num2arr = num2.map(x => +x);

  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of num1arr) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of num2arr) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  entries1 = Object.entries(freqCounter1);
  entries2 = Object.entries(freqCounter2);

  if (JSON.stringify(entries1) !== JSON.stringify(entries2)) {
    return false;
  }

  return true;
}

console.log(sameFrequency(1283443, 1324435));
