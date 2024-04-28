const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [K, scores] = input;

const N = K.shift();

const sorted = scores.sort((a, b) => b - a);

console.log(sorted[K - 1]);