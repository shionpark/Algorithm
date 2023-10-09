const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = input[0];
const idx = Number(input[1]);

console.log(word[idx - 1]);
