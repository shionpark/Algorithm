const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .join(" ")
  .split(" ")
  .map(Number);

const [num1Top, num1Bottom, num2Top, num2Bottom] = input;

const top = num1Top * num2Bottom + num2Top * num1Bottom;
const bottom = num1Bottom * num2Bottom;

const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const commonDivisor = getGcd(top, bottom);
const resultTop = top / commonDivisor;
const resultBottom = bottom / commonDivisor;

console.log(resultTop, resultBottom);
