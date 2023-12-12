function solution(s, n) {
    let answer = "";
    
    for (let i = 0; i < s.length; i++) {
        let chCode = s[i].charCodeAt();
        
        if (s[i] === " ") answer += " "

        if (chCode >= "A".charCodeAt() && chCode <= "Z".charCodeAt()) {
            if (chCode + n > "Z".charCodeAt()) {
                answer += String.fromCharCode(chCode -26 + n)
            } else {
                answer += String.fromCharCode(chCode + n)
            }
        } else if (chCode >= "a".charCodeAt() && chCode <= "z".charCodeAt()) {
            if (chCode + n > "z".charCodeAt()) {
                answer += String.fromCharCode(chCode - 26 + n)   
            } else {
                answer += String.fromCharCode(chCode + n) 
            }
        }
        
    }
    return answer 
}