function solution(arr) {
    let filteredArr = arr.filter(i => i !== Math.min(...arr))
    return (filteredArr.length === 0) ? [-1] : filteredArr;
}