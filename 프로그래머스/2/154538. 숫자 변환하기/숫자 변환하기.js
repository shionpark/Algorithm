function solution(x, y, n) {
    let dp = [...Array(y + 1).fill(Infinity)] // 도달할 수 없는 상태
    
    dp[x] = 0; // 시작점 x에서의 연산 횟수
    
    for (let i = x; i <= y; i++) {
        if (i - n >= x) dp[i] = Math.min(dp[i], dp[i - n] + 1)
        if (i % 2 === 0 && i / 2 >= x) dp[i] = Math.min(dp[i], dp[i / 2] + 1)
        if (i % 3 === 0 && i / 3 >= x) dp[i] = Math.min(dp[i], dp[i / 3] + 1)
    }
    
    return dp[y] === Infinity ? -1 : dp[y]
}