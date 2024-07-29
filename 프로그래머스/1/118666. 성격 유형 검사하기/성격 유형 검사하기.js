function solution(survey, choices) {
    const result = {
        "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0,
    }
    
    for (let i = 0; i < choices.length; i++) {
        const score = choices[i] - 4;
        const [left, right] = survey[i]
        if (score !== 0) {
            score < 0 ? result[left] += -score : result[right] += score;
        }
    }
    
    let answer = '';
    answer += result["R"] >= result["T"] ? "R" : "T";
    answer += result["C"] >= result["F"] ? "C" : "F";
    answer += result["J"] >= result["M"] ? "J" : "M";
    answer += result["A"] >= result["N"] ? "A" : "N";
    return answer;
}