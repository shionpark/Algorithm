const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [TEST_CASE, MAX_NUM] = input[0];
const arr = input[1];
let sum = 0;
let maxSum = 0;

for (let i = 0; i < TEST_CASE - 2; i++) {
  for (let j = i + 1; j < TEST_CASE - 1; j++) {
    for (let k = j + 1; k < TEST_CASE; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (sum <= MAX_NUM && sum > maxSum) {
        maxSum = sum;
      }
    }
  }
}

console.log(maxSum);