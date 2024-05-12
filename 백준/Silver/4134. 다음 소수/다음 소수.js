const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

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

while (input.length) {
  if (isPrime(input[0])) {
    answer.push(input[0]);
    input.shift();
  } else {
    input[0]++;
  }
}
console.log(answer.join("\n"));
