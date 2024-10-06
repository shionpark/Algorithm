function solution(n) {
    let answer = 0;
    
    let boundary = n/2 + 1;
    for (let i = 1; i < boundary; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += j;
            if (sum > n) {
                break;
            } else if (sum === n) {
                answer++;
                break;
            }
        }
    }
    
    return n === 1 ? 1 : answer + 1;
}