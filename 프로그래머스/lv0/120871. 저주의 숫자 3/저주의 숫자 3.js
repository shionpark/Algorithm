function solution(n) {
    const arr = Array.from({ length: 200 }, (value, index) => index) 
    const filtered = arr.filter(item => (
        (item % 3 !== 0) && (!String(item).includes('3'))
    ))
    return filtered[n - 1] // n은 1부터 시작
}