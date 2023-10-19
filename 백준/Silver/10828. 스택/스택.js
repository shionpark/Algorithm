const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift(), 10);
let stack = [];
let answer = [];

for (let i = 0; i < N; i++) {
  switch (input[i]) {
    case "pop":
      answer.push(stack.pop() || -1);
      break;

    case "top":
      answer.push(stack[stack.length - 1] || -1);
      break;

    case "size":
      answer.push(stack.length);
      break;

    case "empty":
      answer.push(stack[0] ? 0 : 1);
      break;

    default:
      stack.push(Number(input[i].split(" ")[1]));
      break;
  }
}
console.log(answer.join("\n"));
