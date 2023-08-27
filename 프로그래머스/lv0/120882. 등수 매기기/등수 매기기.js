function solution(score) {
    let arr = [];
    score.map(i => {
        const mean = (i[0] + i[1]) / 2
        arr.push(mean)
    })
    console.log(arr)
    
    let answer = []
    const sortedArr = [...arr].sort((a,b) => b-a)
    for (let i = 0; i < sortedArr.length; i++) {
        answer.push(sortedArr.indexOf(arr[i]) + 1)
    }
    console.log(answer)
    return answer
}