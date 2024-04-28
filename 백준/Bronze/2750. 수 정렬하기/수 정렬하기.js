const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
let result = "";

const sorted = input.sort((a, b) => a - b);
sorted.map((i) => {
  result += i + "\n";
});

console.log(result.slice(0, -1));