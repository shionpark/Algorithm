const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, S] = input.shift().split(" ");

const setM = new Set(input.slice(0, M));
const arrS = input.slice(M, M + S);

let count = 0;

const result = arrS.map((i) => setM.has(i) && count++);

console.log(count);
