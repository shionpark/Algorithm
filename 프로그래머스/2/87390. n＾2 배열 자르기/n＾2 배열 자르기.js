function solution(n, left, right) {
    let arr = []
    
    for (let i = left; i <= right; i++) {
        const row = parseInt(i / n);
        const col = i % n;
        arr.push(Math.max(row, col) + 1);
    }
    
    return arr
}