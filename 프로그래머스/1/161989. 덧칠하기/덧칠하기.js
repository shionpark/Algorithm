function solution(n, m, section) {
    let arr =  new Array(n).fill(0);
    let count = 0;
    
    section.forEach(s => {
        arr[s - 1] = 1
    })
    
    section.forEach(s => {
        let curIdx = s - 1
        if (arr[curIdx]) {
            arr.fill(0, curIdx, curIdx + m)
            count++
        }
    })
    
    return count;
}