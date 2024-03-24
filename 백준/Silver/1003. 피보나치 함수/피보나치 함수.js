const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const len = input.shift();

const fibonacci = [
  [1, 0], 
  [0, 1], 
];

function getCount() {
  for (let j = 2; j <= 40; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }
}

getCount();

for (let i = 0; i < len; i++) {
  const n = input[i];
  console.log(fibonacci[n].join(" "));
}
