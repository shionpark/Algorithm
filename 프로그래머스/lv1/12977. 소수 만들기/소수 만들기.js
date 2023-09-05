 const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results; 
}
 
 function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}   

function solution(nums) {
    let counter = 0
    // console.log(getCombinations(nums, 3))
    let result = getCombinations(nums, 3)
    for (let i = 0; i < result.length; i++) {
        let sum = result[i].reduce((a, b) => a + b)
        // console.log(sum)
        if (isPrime(sum)) {
           counter = counter + 1
        }
        // console.log(counter)
    }
    return counter
}