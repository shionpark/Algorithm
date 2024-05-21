const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

let stack = [];

input.map((num) => {
  if (num !== 0) {
    stack.push(num);
  } else {
    stack.pop();
  }
});

const result = stack.length ? stack.reduce((a, b) => a + b) : 0;

console.log(result);
