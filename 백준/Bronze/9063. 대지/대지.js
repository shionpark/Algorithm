const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();

const result = input.map((i) => i.split(" ").map(Number));

let valueX = [];
let valueY = [];

for (let i = 0; i < N; i++) {
  valueX.push(result[i][0]);
  valueY.push(result[i][1]);
}

const width = Math.max(...valueX) - Math.min(...valueX);
const height = Math.max(...valueY) - Math.min(...valueY);

console.log(N === 1 ? 0 : width * height);
