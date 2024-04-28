const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.length;

const mean = input.reduce((a, b) => a + b) / N;

const sorted = input.sort((a, b) => a - b);
const index = Math.floor(N / 2);

console.log(mean + "\n" + sorted[index]);