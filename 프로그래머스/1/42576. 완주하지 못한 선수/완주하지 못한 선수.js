function solution(participant, completion) {
    let answer = "";
    let myMap = new Map();
    
    participant.map(p => {
        if (myMap.get(p)) {
            myMap.set(p, myMap.get(p) + 1)
        } else myMap.set(p, 1)
    })
    
    completion.map(c => {
        if (myMap.has(c)) {
            myMap.set(c, myMap.get(c) - 1)
        }
    })
    
    participant.map(el => {
        if (myMap.get(el) !== 0) answer = el
    })
    
    return answer
}