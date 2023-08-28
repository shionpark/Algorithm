function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function solution(balls, share) {
    const 분자 = factorial(balls)
    const 분모 = factorial(balls - share) * factorial(share)
    return Math.round(분자 / 분모);
}