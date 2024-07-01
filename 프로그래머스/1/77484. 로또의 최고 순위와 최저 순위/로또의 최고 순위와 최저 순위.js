function solution(lottos, win_nums) {
    let min = 0
    let max = 0
    let result = [0, 0]
    
    lottos.forEach(myNum => {
        if (win_nums.find(winNum => winNum === myNum)) {
            min++
            max++
        }
        if (myNum === 0) max++
    })
    
    function check(num) {
        let result = 0
        if (num === 6) {
            result = 1
        } else if (num === 5) {
            result = 2
        } else if (num === 4) {
            result = 3
        } else if (num === 3) {
            result = 4
        } else if (num === 2) {
            result = 5
        } else result = 6
        return result
    }

    result[0] = check(max)       
    result[1] = check(min)
    return result
}