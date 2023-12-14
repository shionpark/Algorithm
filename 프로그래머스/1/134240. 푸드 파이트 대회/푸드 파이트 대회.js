function solution(food) {
    let answer = '';
    
    food.map((repeat, index) => {
        let rep = Math.floor(repeat / 2)
        answer += String(index).repeat(rep)
    })
    
    let reversed = answer.split("").reverse().join("")
    
    answer += 0
    answer += reversed
    
    return answer;
}