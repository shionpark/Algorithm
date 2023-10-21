const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
const sorted = input.sort((a, b) => a - b).join("\n");

console.log(sorted);
