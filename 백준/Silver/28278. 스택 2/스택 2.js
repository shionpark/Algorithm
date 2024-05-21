const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const ORDERS = [1, 2, 3, 4, 5];

const stack = [];
let result = [];

input.map((order) => {
  if (order.length > 1) {
    let num = order.split(" ").map(Number)[1];
    stack.push(num);
  } else {
    const orderNum = Number(order);
    for (let i = 0; i < ORDERS.length; i++) {
      if (orderNum === ORDERS[i]) {
        if (orderNum === 2) result.push(stack.length ? stack.pop() : -1);
        if (orderNum === 3) result.push(stack.length);
        if (orderNum === 4) result.push(stack.length ? 0 : 1);
        if (orderNum === 5)
          result.push(stack.length ? stack[stack.length - 1] : -1);
      }
    }
  }
});

console.log(result.join("\n").trim());
