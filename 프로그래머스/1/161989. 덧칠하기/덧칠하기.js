function solution(n, m, sections) {
    let count = 0,
        painted = 0;
    
    for(let section of sections) {
        if(painted < section) {
            count++;
            painted = section + m - 1;
        }
    }
    return count;
}