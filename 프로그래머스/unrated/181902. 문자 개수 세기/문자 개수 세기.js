function solution(my_string) {
    let arr = new Array(52).fill(0)
    
    let alphabetMap = {}
    for (let charCode = 65; charCode <= 90; charCode++) {
        let char = String.fromCharCode(charCode) 
        alphabetMap[char] = charCode - 65
    }
    for (let charCode = 97; charCode <= 122; charCode++) {
        let char = String.fromCharCode(charCode) 
        alphabetMap[char] = charCode - (65 + 6)
    }
    
    for (let i = 0; i < my_string.length; i++) {
        let index = alphabetMap[my_string[i]]
        arr[index]++
    }
    
    return arr
}