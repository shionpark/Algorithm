function getGcd(x, y) {
    let gcd = 1;
    for (let i = 2; i <= Math.min(x, y); i++) {
        if ((x % i === 0) && (y % i === 0)) gcd = i
    }
    return gcd
}

function solution(a, b) {
    let answer = 0

    // 1. 최대공약수 : 두 수의 공통된 약수 중 가장 큰 정수
    const gcd = getGcd(a, b)
    console.log(gcd)
    
    // 2. 기약분수 : 최대공약수로 약분
    let c = b / gcd
    
    while(c % 2===0){c = c/2}
    while(c % 5===0){c = c/5}
    return c !== 1 ? 2 : 1; 
    
}