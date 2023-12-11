function solution(n) {
    let treeNum = "";
    let cnt = 1;
    let answer = 0;
    
    while (n > 0) {
        treeNum += String(n % 3)
        n = Math.floor(n / 3)
    }
    treeNum = treeNum.split("").reverse().join("")
    
    for (let i = 0; i < treeNum.length; i++) {
        answer += Number(treeNum[i]) * cnt
        cnt *= 3
    }
    return answer
}