function solution(a, b, n) {
    let getBottles = 0
    
    while (n >= a) {
        let remainBottles = n % a // 팔기 전 남은 병 수
        n = Math.floor(n / a) * b // 획득한 병 수
        getBottles += n
        n += remainBottles
    }
    return getBottles
   
}