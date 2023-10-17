const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const nums = input[1].split(" ").map(Number);

const isPrime = (n) => {
    if (n == 1) {
      return false;
    }
    
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(nums.filter((num) => isPrime(num)).length);
