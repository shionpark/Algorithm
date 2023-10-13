const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [length, number] = input;

let sum = 0;
for (let i = 0; i < length; i++) {
  sum += parseInt(number[i]);
}

console.log(sum);