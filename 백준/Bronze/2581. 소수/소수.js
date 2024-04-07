const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [min, max] = input;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let arr = [];
for (let i = min; i <= max; i++) {
  if (isPrime(i)) {
    arr.push(i);
  }
}

const getAnswer = (arr) => {
  if (arr.length) {
    const answerSum = arr.reduce((a, b) => a + b, 0);
    const answerMin = arr[0];
    return answerSum + "\n" + answerMin;
  } else {
    return "-1";
  }
};

console.log(getAnswer(arr));