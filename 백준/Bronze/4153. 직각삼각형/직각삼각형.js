const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

function solution(input) {
  for (let i = 0; i < input.length - 1; i += 1) {
    input[i].sort((a, b) => a - b);
    [a, b, c] = input[i];
    a ** 2 + b ** 2 === c ** 2 ? console.log("right") : console.log("wrong");
  }
}

solution(input);