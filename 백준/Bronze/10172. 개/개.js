const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);
