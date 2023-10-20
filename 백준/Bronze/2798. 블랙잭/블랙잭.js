const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const MAX_NUM = Number(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

let minDifference = Number.POSITIVE_INFINITY;
let result;

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      const currentSum = arr[i] + arr[j] + arr[k];
      const currentDifference = MAX_NUM - currentSum;

      if (currentDifference >= 0 && currentDifference < minDifference) {
        minDifference = currentDifference;
        result = arr[i] + arr[j] + arr[k];
      }
    }
  }
}

console.log(result);
