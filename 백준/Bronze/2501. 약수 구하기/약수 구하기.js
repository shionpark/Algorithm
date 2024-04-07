const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

let arr = [];

for (let i = 0; i <= N; i++) {
  if (N % i === 0) {
    arr.push(i);
  }
}

const getAnswer = () => {
  if (arr.length < K) return 0;
  return arr[K - 1];
};

console.log(getAnswer());