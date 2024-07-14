function solution(X, Y) {
    let answer = ""
    let spellX = X.split("")
    let spellY = Y.split("")
    
    for(let i = 0 ; i < 10 ; i ++) {
        const curX = spellX.filter(x => Number(x) === i).length
        const curY = spellY.filter(y => Number(y) === i).length
        answer += String(i).repeat(Math.min(curX, curY))
    }
    
    if (answer === '') return "-1"
    if (Number(answer) === 0) return "0"
    
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}