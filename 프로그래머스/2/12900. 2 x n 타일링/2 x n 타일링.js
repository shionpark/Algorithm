function solution(n) {
    const memo = new Array(600001).fill(-1)
    
    memo[0] = 1
    memo[1] = 1
    
    // DP(n) = DP(n - 1) + DP(n - 2)
    for (let i = 2; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1000000007    
    }

    return memo[n]
}