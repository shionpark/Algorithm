const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [length, scores] = input;

const score = scores.split(" ").map(Number);
const maxScore = score.sort((a, b) => b - a)[0];
let mean = 0;

score.map((i) => {
  mean += (i / maxScore) * 100;
});

console.log(mean / length);