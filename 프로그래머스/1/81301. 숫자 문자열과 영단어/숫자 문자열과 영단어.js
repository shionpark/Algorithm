function solution(s) {
    const words_list = "zero one two three four five six seven eight nine";
    let words = words_list.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        while (s.includes(words[i])) {
            s = s.replace(words[i], i);
        }
    }
    
    return Number(s);
}