const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

let [a, b] = input;
a = parseInt(a);
b = parseInt(b);
console.log(`${a + b} \n${a - b} \n${a * b} \n${Math.floor(a / b)} \n${a % b}`);
