const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

let solution = "";
for (let i = 1; i <= input; i++) {
  let num = input - i;
  let space = " ".repeat(num);
  let star = "*".repeat(i);
  solution += space + star + `\n`;
}

console.log(solution.slice(0, solution.length - 1));
