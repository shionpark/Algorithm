const solution = nums => {
    let answer = [];
    const max = nums.length / 2;

    nums.map(num => (
        answer.length < max && !answer.includes(num) ? answer.push(num) : num
    ));
    
    return answer.length;    
}