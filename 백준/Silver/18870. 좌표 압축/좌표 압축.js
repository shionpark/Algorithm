const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.shift();

const arr = input[0];
const uniqueArr = [...new Set(arr)];
const uniqueArrSorted = uniqueArr.sort((a, b) => a - b);

const obj = {};
let answer = "";

uniqueArrSorted.forEach((val, idx) => {
  obj[val] = idx;
});

for (let i = 0; i < arr.length; i++) {
  answer += obj[arr[i]] + " ";
}

console.log(answer);
