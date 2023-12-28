function solution(operations) {
    let queue = [];
    let answer = [];
    
    operations.map(i => {
        if (i.startsWith("I")) {
            queue.push(+i.split(" ")[1])
        } else if (i.startsWith("D -")) {
            let min = Math.min(...queue)
            queue = queue.filter(el => el !== min)
        } else {
            let max = Math.max(...queue)
            queue = queue.filter(el => el !== max)
        }
    })
    
    if (queue.length) {
        answer.push(Math.max(...queue), Math.min(...queue))
    }
    return answer.length ? answer : [0, 0]
}