function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}


function solution(nums) {
    let answer = 0
    let N = nums.length
    for (let i = 0; i < N - 2; i++) {
        for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                if (sum % 2 === 0) continue;
                else if (isPrime(sum)) answer++
            }
        }
    }
    return answer
}