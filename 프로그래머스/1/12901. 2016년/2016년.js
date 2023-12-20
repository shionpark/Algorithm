function solution(a, b) {
    const month = a - 1
    return new Date(2016, month, b).toString().slice(0, 3).toUpperCase()
}