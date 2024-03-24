const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

const sample = [...Array(11).fill(0)];

sample[1] = 1;
sample[2] = 2;
sample[3] = 4;

for (let i = 4; i < 11; i++) {
  sample[i] = sample[i - 1] + sample[i - 2] + sample[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(sample[input[i]]);
}
