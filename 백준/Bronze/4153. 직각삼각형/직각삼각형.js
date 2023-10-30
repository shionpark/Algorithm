const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let result = [];

const numArr = input.slice(0, input.length - 1);

for (let i = 0; i < numArr.length; i++) {
  numArr[i].sort((a, b) => a - b);
  [a, b, c] = numArr[i];
  if (a ** 2 + b ** 2 === c ** 2) {
    result.push("right");
  } else result.push("wrong");
}

console.log(result.join("\n"));
