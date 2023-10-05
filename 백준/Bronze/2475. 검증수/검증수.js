const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const square = input.map((i) => i * i);
let answer = 0;
for (const a of square) {
  answer += a;
  answer = answer % 10;
}
console.log(answer);