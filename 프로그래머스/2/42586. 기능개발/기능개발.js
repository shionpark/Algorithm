function solution(progresses, speeds) {
    let answer = [];
    
    while(speeds.length > 0) { // 배포되지 않은 작업이 남아있을 경우
        // 개발
        for (let i in speeds) {
            if (progresses[i] < 100) {
                progresses[i] += speeds[i]
            }
        }
        
        // 배포
        let deploy_count = 0;
        while (progresses[0] >= 100) {
            progresses.shift(); // 배포
            speeds.shift();     // 배포
            deploy_count++;
        }
        if (deploy_count > 0) {
            answer.push(deploy_count);
        }
    }
    
    return answer;
}