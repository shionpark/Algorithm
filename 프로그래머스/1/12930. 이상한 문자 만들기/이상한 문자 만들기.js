function solution(s) {
    let answer = ""
    let index = 0;
    
    for (let spell of s) {
        answer += (index % 2 === 0) ? spell.toUpperCase() : spell.toLowerCase();
        index += 1;
        if (spell === " ") index = 0;
    }
    return answer;
}