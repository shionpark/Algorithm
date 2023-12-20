function solution(a, b) {
    let answer = 0
    
    // 2016년 1월 1일은 금요일
    const month = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 30]
    
    for (let i = 0; i < a - 1; i++) {
        answer += days[i]
    }
    answer += b - 1
    
    return month[answer % 7];
}