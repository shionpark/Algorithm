const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let computer = Number(input[0]);
let connected = Number(input[1]);

let graph = [...new Array(computer + 1)].map(() => []);
let visited = [...new Array(computer + 1)].fill(false);
let answer = 0;

for (let i = 2; i < connected + 2; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

function dfs(from) {
  visited[from] = true;
  for (let to of graph[from]) {
    if (!visited[to]) {
      visited[to] = 1;
      answer++;
      dfs(to);
    }
  }
}

dfs(1);
console.log(answer);
