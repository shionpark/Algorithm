const gcd = (a, b) => {
    if (a % b === 0) return b;
    return gcd(b, a % b); 
}

function solution(n, m) {
    let gcd_n = gcd(n, m)
    let lcm = n * m / gcd_n
    return [gcd_n, lcm];
}