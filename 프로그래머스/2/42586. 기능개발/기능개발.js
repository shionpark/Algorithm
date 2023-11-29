function solution(progresses, speeds) {
    let answer = [];
    let number = 0;
    let cnt = 0;
    
    while (true) {
        if (number >= progresses.length) { // while문 탈출
            answer.push(cnt);
            break;
        }
        if (progresses[number] >= 100) { // 배포 가능
            number++;
            cnt++;
            continue;
        }
        else {          // 배포 개수 0보다 크면 배열에 담음
            if (cnt > 0) answer.push(cnt);
            cnt = 0;
        }
        
        for (let i = number; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
    }
    
    return answer;
}