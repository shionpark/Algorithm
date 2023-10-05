const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = (i) => {
  return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0) ? 1 : 0;
};
console.log(solution(input));
