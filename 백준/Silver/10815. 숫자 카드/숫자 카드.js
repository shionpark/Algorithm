const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [N, cards, M, MCards] = input;

const cardSet = new Set(cards);

const result = MCards.map((i) => (cardSet.has(i) ? "1" : "0")).join(" ");
console.log(result);
