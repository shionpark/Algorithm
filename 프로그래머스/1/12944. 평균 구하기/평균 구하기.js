function solution(arr) {
    let result = 0;
    arr.map(i => {
        result += i;
    })
    return result / arr.length
}