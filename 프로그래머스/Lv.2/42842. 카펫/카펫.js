function solution(brown, yellow) {
    let answer = [];
    let squareSize = brown + yellow;
    
    for(let height = 3; height <= (squareSize) / height; height++) {
        let width = Math.floor((squareSize) / height);
        if((width - 2) * (height - 2) === yellow) {
            answer = [width, height];
            break;
        }
    }
    
    return answer;
}