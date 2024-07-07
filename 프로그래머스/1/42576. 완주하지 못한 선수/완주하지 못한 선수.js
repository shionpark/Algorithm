function solution(participant, completion) {
    let answer = ""
    let map = new Map()
    
    participant.map(p => {
        if (map.get(p) !== undefined) {
            map.set(p, map.get(p) + 1)
        } else {
            map.set(p, 0)
        }
    })
    
    completion.map(c => {
        if (map.get(c) !== undefined) {
            map.set(c, map.get(c) - 1)
        }
    })
    
    for (let [k, v] of map) {
        if (v === 0) answer = k
    }
    
    return answer
}