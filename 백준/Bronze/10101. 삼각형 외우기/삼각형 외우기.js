const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const exampleReturns = ["Equilateral", "Isosceles", "Scalene", "Error"];

const sum = input.reduce((a, b) => a + b);
const isSum = sum === 180;

const getCount = (a, b, c) => {
  if (a === b && b === c) {
    return 3;
  }
  if (a === b || b === c || a === c) {
    return 2;
  } else {
    return 0;
  }
};

const result = getCount(...input);

const getAnswer = (val) => {
  if (val === 3 && isSum) {
    return exampleReturns[0];
  } else if (isSum && val === 2) {
    return exampleReturns[1];
  } else if (isSum && val === 0) {
    return exampleReturns[2];
  } else if (!isSum) {
    return exampleReturns[3];
  }
};

console.log(getAnswer(result));