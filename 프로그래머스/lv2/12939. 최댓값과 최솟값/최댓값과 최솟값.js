function solution(s) {
    const data = s.split(" ");
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    return minValue + ' ' + maxValue;
}