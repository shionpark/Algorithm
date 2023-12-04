function solution(arr) {
    let emptyArr = [-1]
    let filteredArr = arr.filter(i => i !== Math.min(...arr))
    return (filteredArr.length === 0) ? emptyArr : filteredArr;
}