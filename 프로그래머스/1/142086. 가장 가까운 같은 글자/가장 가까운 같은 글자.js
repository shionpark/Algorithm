function solution(s) {
    let str = "";
    let result = [];
    
    result.push(-1)
    
    for (let i = 1; i < s.length; i++) {
        str += s[i - 1]
        if (str.lastIndexOf(s[i]) === -1) {
            result.push(-1)
        } else {
            result.push(-1 * (str.lastIndexOf(s[i]) - i))
        }
    }
    return result;
}