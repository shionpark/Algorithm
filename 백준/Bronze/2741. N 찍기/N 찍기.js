const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let answer = "";
for (let i = 1; i <= input; i++) {
  if (i < input) {
    answer += i + "\n";
  } else {
    answer += i;
  }
}
console.log(answer);
