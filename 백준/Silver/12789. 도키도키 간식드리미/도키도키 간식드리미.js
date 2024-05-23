const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const numbers = input[0].split(" ").map(Number);

const tmp = [];
let init = 1;

for (let value of numbers) {
  tmp.push(value);
  while (tmp.length > 0 && tmp[tmp.length - 1] === init) {
    tmp.pop();
    init++;
  }
}

if (tmp.length > 0) console.log("Sad");
else console.log("Nice");
