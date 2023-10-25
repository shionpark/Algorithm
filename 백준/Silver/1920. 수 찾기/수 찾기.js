const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numA = input[1].split(" ").map(Number);
const numB = input[3].split(" ").map(Number);

const setA = new Set(numA);

let result = "";
numB.forEach((el) => {
  if (setA.has(el)) {
    result += "1\n";
  } else {
    result += "0\n";
  }
});
console.log(result.slice(0, result.length - 1));