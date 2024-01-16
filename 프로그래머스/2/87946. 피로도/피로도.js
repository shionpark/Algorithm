function solution(k, dungeons) {
    let answer = 0
    
    const visited = Array.from({ length: dungeons.length }, () => false)
    
    function DFS(hp, step) {
        for (let i = 0; i < dungeons.length; i++) {
            // 아직 방문하지 않음 && 최소 필요도 <= 현재 피로도 
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true; // 방문
                DFS(hp - dungeons[i][1], step+1); // 현재 피로도 - 방문 던전
                visited[i] = false; // 방문 종료
            }
        }
        // 가장 깊이 들어간 진행단계
        answer = Math.max(answer, step);
    }
    
    DFS(k, 0);
    
    return answer;
}