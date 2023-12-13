function solution(s) {
    let answer = ""
    const words_list = "zero one two three four five six seven eight nine";
    
    let words = words_list.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        const regex = new RegExp(words[i], 'g');
        s = s.replace(regex, i);
    }
    
    return Number(s);
}