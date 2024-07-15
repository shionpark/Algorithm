function solution(queue1, queue2) {
    let answer = 0
    
    let q1Sum = queue1.reduce((a,b)=>a+b)
    let q2Sum = queue2.reduce((a,b)=>a+b)
    let totalLength = (queue1.length + queue2.length) * 2
    
    let q1Idx = 0
    let q2Idx = 0
    
    while (q1Sum !== q2Sum) {
        if (q1Sum > q2Sum) {
            if (q1Idx >= queue1.length) return -1
            let element = queue1[q1Idx++]
            q1Sum -= element
            q2Sum += element
            queue2.push(element)
        } else {
            if (q2Idx >= queue2.length) return -1
            let element = queue2[q2Idx++]
            q1Sum += element
            q2Sum -= element
            queue1.push(element)
        }
        answer++
        if (totalLength <= answer) return -1
    }
    
    return answer
}