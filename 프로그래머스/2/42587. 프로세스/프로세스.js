function solution(priorities, location) {
    var answer = 0;
    let queue = [];
    priorities.forEach((el, idx) => {
        queue.push({ priority: el, index: idx })   
    })
    
    while (queue.length) {
        const current = queue.shift()
        if (queue.some(el => el.priority > current.priority)) {
            queue.push(current)
        } else {
            answer++;
            if (current.index === location) {
                break;
            }
        }
            
    }
    
    return answer;
}