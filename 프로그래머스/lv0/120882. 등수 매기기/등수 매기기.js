function solution(score) {
    let arr = [];
    score.map(i => {
        const mean = (i[0] + i[1]) / 2
        arr.push(mean)
    })
    
    const sortedArr = [...arr].sort((a,b) => b-a)
    
    let result = []
    for (let i = 0; i < sortedArr.length; i++) {
        result.push(sortedArr.indexOf(arr[i]) + 1)
    }
    return result
}