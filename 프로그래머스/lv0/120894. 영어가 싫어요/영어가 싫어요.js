function solution(numbers) {
    
    const strList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for (let i = 0; i < strList.length; i++) {
        while (numbers.includes(strList[i])) {
            numbers = numbers.replace(strList[i], i);
        }
    }
    
    const answer = parseInt(numbers);
    return answer;
}