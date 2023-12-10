function solution(number) {
    let cnt = 0;
    let N = number.length;
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                if (number[i] + number[j] + number[k] === 0) cnt++
            }
        }
    }
    
    return cnt;
    
}