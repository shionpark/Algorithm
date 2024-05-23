const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const reg = /[()\[\]]/g;

const brackets = input.map((i) => i.match(reg));

const isValidBrackets = (brackets) => {
  const stack = [];
  const matchingBrackets = {
    ")": "(",
    "]": "[",
  };

  if (brackets === null) {
    brackets = [];
  }

  for (const bracket of brackets) {
    if (bracket === "(" || bracket === "[") {
      stack.push(bracket);
    } else if (bracket === ")" || bracket === "]") {
      if (stack.pop() !== matchingBrackets[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const results = brackets.map((bracketArr) => {
  return isValidBrackets(bracketArr) ? "yes" : "no";
});
results.pop();
console.log(results.join("\n"));