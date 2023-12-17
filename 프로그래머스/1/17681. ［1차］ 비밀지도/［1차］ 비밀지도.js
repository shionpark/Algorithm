function solution(n, arr1, arr2) {
    let stk = [];
    arr1.map(el => {
        stk.push(el.toString(2).padStart(n, 0))
    })
    arr2.map(el => {
        stk.push(el.toString(2).padStart(n, 0))
    })
    
    let result = ""
    let answer = ""
    
    for (let i = 0; i <n; i++) {
        for (let j = 0; j < n; j++) {
            if ((stk[i][j] === "1") || (stk[i + n][j] === "1")) {
                result += "#"
            } else {
                result += " "
            }
        }
    }
    answer += result
    
    let slicedStrings = []
    for (let i = 0; i < answer.length; i += n) {
      let slicedPart = answer.slice(i, i + n);
      slicedStrings.push(slicedPart);
    }
    return slicedStrings
}