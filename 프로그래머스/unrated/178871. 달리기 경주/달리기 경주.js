function solution(players, callings) {
    // player를 객체로 만들어준다. 등수(인덱스)를 부여
    const playerMap = {};
    for (let i = 0; i < players.length; i++) {
        playerMap[players[i]] = i;          // playerMap = {"mumu": 1, "soe": 2, "poe": 3, "kai": 4, "mine": 5}
    }
    
    for (let call of callings) {
        const curLoc = playerMap[call];     
        
        // 호출된 선수를 앞으로 한 칸 옮겨주는데, 먼저 앞에 있는 선수를 기억해야
        const temp = players[curLoc - 1]       
        players[curLoc - 1] = players[curLoc]  
        players[curLoc] = temp;               
        
        // 등수를 기억하고 있는 객체 변경
        playerMap[call] = curLoc - 1            
        playerMap[temp] = curLoc               
    }
    
    return players;
}


