const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = () => {
  const [N, M] = input.shift().split(" ").map(Number);
  const names = {};
  const answer = [0, []];

  input.forEach((name) => {
    if (!names[name]) names[name] = 1;
    else {
      answer[0]++;
      answer[1].push(name);
    }
  });

  console.log(answer[0]);
  console.log(answer[1].sort().join("\n"));
};

solution();
