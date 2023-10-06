const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const num = parseInt(input);
let result = "";

if (num >= 90 && num <= 100) {
  result = "A";
} else if (num >= 80 && num <= 89) {
  result = "B";
} else if (num >= 70 && num <= 79) {
  result = "C";
} else if (num >= 60 && num <= 69) {
  result = "D";
} else result = "F";

console.log(result);
