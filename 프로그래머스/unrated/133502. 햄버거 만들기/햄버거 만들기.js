function solution(ingredient) {
    const stack = [];
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length < 4) continue;
        
        const pattern = stack.slice(-4);
        
        if (pattern[0] === 1 && pattern[1] === 2 && pattern[2] === 3 && pattern[3] === 1) {
            count++;
            stack.length -= 4;
        }
    }
    return count;
}