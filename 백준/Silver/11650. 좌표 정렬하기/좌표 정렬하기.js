const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const iter = Number(input.shift());

let arr = [];

for (let i = 0; i < iter; i++) {
  arr.push(input[i].split(" ").map((item) => Number(item)));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let answer = [];
for (let i = 0; i < iter; i++) {
  let result = arr[i].join(" ");
  answer.push(result);
}

console.log(answer.join("\n"));
