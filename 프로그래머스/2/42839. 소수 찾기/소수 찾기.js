function solution(numbers) {
    let answer = new Set()
    
    const numArr = numbers.split("").map(i => Number(i))
    
    const getPermutation = (arr, selectNum) => {
        if (selectNum === 1) return arr.map((value) => [value]);
        
        let results = []
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
            const combinations = getPermutation(rest, selectNum - 1)
            const attached = combinations.map((combination) => [fixed, ...combination])
            results.push(...attached)
            
        })
        return results   
    }
    
        
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }
        return true
    }
    
    for (let i = 1; i <= numArr.length; i++) {
        const permutations = getPermutation(numArr, i)
        permutations.forEach((permutation) => {
            const num = Number(permutation.join(""))
            if (isPrime(num)) answer.add(num)
        })
    }
    return answer.size;
}