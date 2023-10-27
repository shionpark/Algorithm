const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

let queue = [];
let answer = [];

for (let i = 0; i < N; i++) {
  switch (input[i]) {
    case "pop":
      answer.push(queue.shift() || -1);
      break;

    case "front":
      answer.push(queue[0] || -1);
      break;

    case "back":
      answer.push(queue[queue.length - 1] || -1);
      break;

    case "size":
      answer.push(queue.length);
      break;

    case "empty":
      answer.push(queue.length > 0 ? 0 : 1);
      break;

    default:
      queue.push(Number(input[i].split(" ")[1]));
      break;
  }
}
console.log(answer.join("\n"));