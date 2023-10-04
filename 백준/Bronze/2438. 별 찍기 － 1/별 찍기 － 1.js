const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = (num) => {
  let answer = "";
  for (let i = 1; i <= num; i++) {
    answer += "*".repeat(i) + "\n";
  }
  return answer;
};
console.log(solution(input));
