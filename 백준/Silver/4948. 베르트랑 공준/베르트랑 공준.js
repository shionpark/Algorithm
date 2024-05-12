const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

let answer = [];

input.map((num) => {
  let count = 0;
  let min = num;
  let max = 2 * num;

  for (let i = min + 1; i <= max; i++) {
    if (isPrime(i)) count++;
  }
  answer.push(count);
});

answer.pop();

console.log(answer.join("\n"));
