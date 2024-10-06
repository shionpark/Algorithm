function solution(s) {
    let result = [0, 0];
    
    while (s.length > 1) { 
        result[0]++;
        result[1] += s.length - s.split("0").join("").length; 
        s = s.split("0").join("").length.toString(2) 
    }
    
    return result
}