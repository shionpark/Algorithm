const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = input[0].split(" ").map(Number);
const b = input[1].split(" ").map(Number);

let solution = "";
b.map((i) => {
  if (i < a[1]) solution += ` ${i}`;
});
console.log(solution.trim());