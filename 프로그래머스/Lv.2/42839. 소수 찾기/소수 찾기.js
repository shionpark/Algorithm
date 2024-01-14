function solution(numbers) {
    let result = new Set();
    let nums = numbers.split("")
    
    const isPrime = (num) => {
         if (num <= 1) return false;
         for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
         }
         return true;
    }
    
    function getPermutation (arr, fixed) {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if(isPrime(parseInt(newFixed))) {
                    result.add(parseInt(newFixed));
                }
                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    getPermutation(nums, "")
    
    return result.size;
}