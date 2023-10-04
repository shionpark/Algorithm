const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [A, B] = input.map((num) => Number(num));

const solution = (A, B) => {
  if (A > B) {
    return ">";
  } else if (A < B) {
    return "<";
  } else if (A === B) {
    return "==";
  }
};

console.log(solution(A, B));
