function solution(k, score) {
    let glory = [];
    let answer = [];
    
    score.map(s => {
        if (glory.length < k) {
            glory.push(s)
        } else {
            if (glory[glory.length - 1] < s) {
                glory.pop()
                glory.push(s)
            }
        }
        glory.sort((a, b) => b - a)
        answer.push(glory[glory.length - 1])
    })
    
    return answer;
}