function solution(n, left, right) {
    let arr = []
    
    for (let i = left; i <= right; i++) {
        const from = parseInt(i / n);
        const to = i % n;
        arr.push(Math.max(from, to) + 1);
    }
    
    return arr
}