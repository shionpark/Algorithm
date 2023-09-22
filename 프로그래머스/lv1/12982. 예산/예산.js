function solution(d, budget) {
    let count = 0
    let curSum = 0
    let curIndex = 0
    
    d = d.sort((a, b) => a - b)
    
    for (let i = 0; i < d.length; i++) {
        curSum += d[i]
        count++
        if (curSum === budget) { return count }
        if (curSum > budget) { return count - 1 }
    }
    return count;
}