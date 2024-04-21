const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

let M = 0; // 가장 작은 생성자를 찾아야 하므로 0부터 시작

for (let i = 0; i < N; i++) {
  let sum = 0;
  const candidateValue = i;
  const strValue = candidateValue.toString();

  for (let j = 0; j < strValue.length; j++) {
    sum += Number(strValue[j]); // 자릿수의 합
  }
  
  sum += candidateValue;

  if (sum === N) {
    M = candidateValue;
    break;
  }
}

console.log(M);