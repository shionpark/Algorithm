// https://velog.io/@bakkomcoder/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%98%88%EC%82%B0

function solution(d, budget) {
    let count = 0
    let curSum = 0
    
    d.sort((a, b) => a - b).forEach(i=> {
        curSum += i
        if (curSum <= budget) {
            count++
        }
    })
    return count;
}