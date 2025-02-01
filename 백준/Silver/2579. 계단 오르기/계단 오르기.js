const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution() {
  const N = input[0];
  if (N === 1) return input[1];
  if (N === 2) return input[1] + input[2];

  const dp = new Array(N + 1).fill(0);

  dp[1] = input[1];
  dp[2] = input[1] + input[2];
  dp[3] = Math.max(input[1] + input[3], input[2] + input[3]);

  for (let i = 4; i <= N; i++) {
    dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
  }

  return dp[N];
}

console.log(solution());