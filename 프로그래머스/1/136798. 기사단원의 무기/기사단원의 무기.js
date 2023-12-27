function solution(number, limit, power) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let len = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                len += 2; 
                if (j === i / j) len--; 
            }
        }
        if (len > limit) len = power;
        sum += len;
    }

    return sum;
}
