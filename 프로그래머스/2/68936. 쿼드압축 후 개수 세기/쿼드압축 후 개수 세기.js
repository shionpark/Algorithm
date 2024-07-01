function solution(arr) {
    let count = [0, 0]
    
    function check(r, c, n) {
        let current = arr[r][c]
        
        if (n === 1) return count[current]++
        let flag = true
        
        for (let i = r; i < r + n; i++) {
            for (let j = c; j < c + n; j++) {
                if (current !== arr[i][j]) {
                    flag = false
                    break
                }
            }
        }
        
        if (flag) return count[current]++ // arr[r][c] = 0 또는 1
        
        n /= 2  // 정확히 4개의 균일한 정사각형 영역으로 쪼갬
        
        check(r, c, n)
        check(r+n, c, n)
        check(r, c+n, n)
        check(r+n, c+n, n)
    }
    
    check(0, 0, arr.length)
    
    return count;
}