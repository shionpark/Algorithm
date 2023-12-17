function solution(n, arr1, arr2) {
    let arr3 = [];
    let answer = [];

    for (let i = 0; i < n; i++) {
        // 비트 OR연산자는 각 비트에 대해 둘 중 하나라도 1이면 결과를 1로 설정함
        arr3.push(arr1[i] | arr2[i]);
    }
    
    arr3.map(el => {
        answer.push(el.toString(2).padStart(n, 0).replace(/1/gi, "#").replace(/0/gi, " "))
    })
    return answer
}