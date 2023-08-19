function solution(n) {
    let answer = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i)
        }
    }
    // console.log("answer", answer)
    
    // 소수 판별 함수
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
    
    // answer의 결과가 소수로만 구성되도록 함
    let result = [];
    for (let i = 0; i < answer.length; i++) {
        if (isPrime(answer[i])) {
          result.push(answer[i]);
        }
    }
    return result;

}