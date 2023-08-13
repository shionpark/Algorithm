// https://velog.io/@bakkomcoder/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%80%EC%A3%BC%EC%9D%98-%EC%88%AB%EC%9E%90-3

function solution(n) {
    const arr = Array.from({ length: 200 }, (value, index) => index) 
    const filtered = arr.filter(item => (
        (item % 3 !== 0) && (!String(item).includes('3'))
    ))
    return filtered[n - 1] // n은 1부터 시작
}