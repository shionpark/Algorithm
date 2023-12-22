function solution(k, m, score) {
    let sum = 0
    
    score.sort((a, b) => b - a);
    
    for (let i = 0; i + m <= score.length; i += m) {
        let min = score[i + m - 1] * m
        sum += min
    }

    return sum;
}