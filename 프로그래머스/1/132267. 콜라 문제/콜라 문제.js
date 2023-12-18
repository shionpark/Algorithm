function solution(a, b, n) {
    let getBottles = 0
    
    while (n >= a) {
        let remainBottles = n % a
        console.log("소유 : ", remainBottles)
        n = Math.floor(n / a) * b
        console.log("획득 : ", n)
        getBottles += n
        n += remainBottles
    }
    return getBottles
   
}