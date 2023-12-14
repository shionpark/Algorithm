function solution(strings, n) {
    let arr = [];
    
    for (let i = 0; i < strings.length; i++) {
        arr.push(strings[i].charAt(n) + strings[i])
    }
    
    arr.sort()
    
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer[i] = arr[i].substring(1)
    }
    
    return answer;
      
}