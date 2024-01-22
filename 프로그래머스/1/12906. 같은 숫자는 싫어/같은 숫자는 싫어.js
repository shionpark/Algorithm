function solution(arr) {
    let stack = []
    
    stack.push(arr[0])
    
    for (let i = 1; i < arr.length; i++) {
        if (stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i])
        } 
    }
    
    return stack
}