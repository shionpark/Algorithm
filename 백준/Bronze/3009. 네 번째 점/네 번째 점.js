const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [xy1, xy2, xy3] = input;

const [x1, y1] = xy1;
const [x2, y2] = xy2;
const [x3, y3] = xy3;

let x4, y4;

if (x1 === x2) {
  x4 = x3;
} else if (x2 === x3) {
  x4 = x1;
} else if (x1 === x3) {
  x4 = x2;
}

if (y1 === y2) {
  y4 = y3;
} else if (y2 === y3) {
  y4 = y1;
} else if (y1 === y3) {
  y4 = y2;
}

console.log(x4, y4);
