const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const myInput = input.slice(0, input.length - 1);
const noMessage = "is NOT perfect.";

let answer = "";

myInput.map((num) => {
  let result = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }

  let sum = result.reduce((acc, curr) => acc + curr, 0);

  if (num === sum) {
    answer += `${num} = ${result.join(" + ")}\n`;
  } else {
    answer += `${num} ${noMessage}\n`;
  }
});

console.log(answer.trim());