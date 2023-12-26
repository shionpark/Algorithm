function solution(n) {
    let arr = new Array(n - 1).fill(2).map((el, idx) => el += idx)
    
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (value === 0) continue;
        for (let j = i + value; j <= n; j += value) {
            arr[j] = 0
        }
    }
    
    return arr.filter(el => el).length
}