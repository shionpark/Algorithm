const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

let obj = {};
input.forEach((el) => {
  const length = el.length;
  if (!obj[length]) {
    obj[length] = [];
  }
  if (!obj[length].includes(el)) {
    obj[length].push(el);
  }
});

let result = "";
for (const key in obj) {
  obj[key].sort();
  obj[key].forEach((el) => {
    result += `${el}\n`;
  });
}

console.log(result.slice(0, -1));
