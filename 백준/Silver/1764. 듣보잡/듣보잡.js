const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const names = {};

let count = 0;
let arr = [];
let answer = "";

input.forEach((name) => {
  if (!names[name]) names[name] = 1;
  else {
    count++;
    arr.push(name);
  }
});

answer = count + "\n" + arr.sort().join("\n");

console.log(answer);
