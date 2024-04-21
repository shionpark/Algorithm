const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => Number(i));

const [a, b, c, d, e, f] = input;

const MIN = -999;
const MAX = 999;

for (let x = MIN; x <= MAX; x++) {
  for (let y = MIN; y <= MAX; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(`${x} ${y}`);
    }
  }
}