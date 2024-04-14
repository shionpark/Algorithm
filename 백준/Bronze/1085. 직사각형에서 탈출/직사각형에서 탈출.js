const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;

const answer = Math.min(w - x, h - y, x, y);

console.log(answer);
