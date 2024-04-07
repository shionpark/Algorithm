const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = ["factor", "multiple", "neither"];

const calculateNum = (first, second) => {
  if (second % first === 0) {
    return cases[0];
  } else if (first % second === 0) {
    return cases[1];
  } else return cases[2];
};

input.map((i) => {
  const [first, second] = i.split(" ");
  if (first !== second) {
    console.log(calculateNum(first, second));
  }
});