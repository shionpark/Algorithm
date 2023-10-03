function solution(my_string) {
    const CHAR_CODE_START = 65
    const CHAR_CODE_SIZE = 25
    const NOT_CHAR_CODE_START = CHAR_CODE_START + CHAR_CODE_SIZE + 1
    const NOT_CHAR_CODE_SIZE = 6
    
    let arr = new Array(52 + NOT_CHAR_CODE_SIZE).fill(0)
    
    for (let char of my_string) {
        arr[char.charCodeAt() - CHAR_CODE_START]++
    }
    
    arr.splice(NOT_CHAR_CODE_START - CHAR_CODE_START, NOT_CHAR_CODE_SIZE)
    
    return arr
}