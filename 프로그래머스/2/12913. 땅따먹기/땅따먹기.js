function solution(land) {
    let answer = 0
    let sum = 0;
    let index = 0;
    let indexValue = 0;
    
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) { 
            if (i === 0) continue;
            else {
                let arr = land[i - 1].slice(); // 이전 행 복사
                arr[j] = 0; // 이전 행 한 칸(열)을 밟는 경우, 같은 열을 연속해서 밟지 못하므로 0으로 설정
                land[i][j] += Math.max.apply(null, arr); // 현재 행열 + 이전 행 최댓값
                sum = Math.max(land[i][j], sum)
            }
        }
    }
    return sum
}