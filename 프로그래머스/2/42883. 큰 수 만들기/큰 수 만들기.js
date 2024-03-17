function solution(number, k) {
    let stack = []
    
    for (const currNum of number) {
        while (k > 0 && stack[stack.length - 1] < currNum) {
            stack.pop()
            k--
        }
        stack.push(currNum)
    }
    
    if(k !== 0) stack = stack.slice(0, -k) 

    return stack.join("");
}