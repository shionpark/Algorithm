const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

const getGcd = (A, B) => {
  if (B === 0) {
    return A;
  }
  return getGcd(B, A % B);
};

const getLcm = (A, B) => {
  const gcd = getGcd(A, B);
  return (A * B) / gcd;
};

console.log(getGcd(A, B));
console.log(getLcm(A, B));
