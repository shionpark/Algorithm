function solution(numbers) {
    
    const strList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for (let i = 0; i < strList.length; i++) {
        if (numbers.includes(strList[i])) {
            numbers = numbers.replaceAll(strList[i], i)
        }
    }
    const answer = Number(numbers)
    return answer
}