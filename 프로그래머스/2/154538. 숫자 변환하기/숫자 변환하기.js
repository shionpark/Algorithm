function solution(x, y, n) {
    let memo = new Array(y + 1).fill(1000001) // 초기값을 큰 값으로 설정
    
    memo[x] = 0; // 시작점 x에서의 연산 횟수는 0
    
    for (let val = x; val <= y; val++) {
        if (val - n >= x) {
            memo[val] = Math.min(memo[val], memo[val - n] + 1)
            console.log("1 ", val, memo)
        }
        
        if (val % 2 === 0 && val / 2 >= x) {
            memo[val] = Math.min(memo[val], memo[val / 2] + 1)
            console.log("2 ", val, memo)
        }
        
        if (val % 3 === 0 && val / 3 >= x) {
            memo[val] = Math.min(memo[val], memo[val / 3] + 1)
            console.log("3 ", val, memo)
        }
        
    }
    
    return memo[y] === 1000001 ? -1 : memo[y]
}