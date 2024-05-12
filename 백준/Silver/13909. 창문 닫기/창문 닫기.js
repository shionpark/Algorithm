const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

let result = 0;

for (i = 1; i * i <= N; i++) {
  result++;
}

console.log(result);