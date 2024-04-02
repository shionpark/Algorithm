const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

const dollar = [25, 10, 5, 1];

for (let t = 0; t < T; t++) {
  let result = "";
  let c = input[t];
  for (let i = 0; i < dollar.length; i++) {
    result += Math.floor(c / dollar[i]) + " ";
    c = c % dollar[i];
  }
  console.log(result.trim());
}