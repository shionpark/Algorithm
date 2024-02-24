function solution(k, dungeons) {
    let answer = 0;
    
    const getPermutations = (arr, selectNum) => {
        const results = []
        if (selectNum === 1) return arr.map((value) => [value]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
            const combinations = getPermutations(rest, selectNum - 1)
            const attached = combinations.map((combination) => [fixed, ...combination])
            results.push(...attached)
        })     
        return results
    };
    
    const permutaions = getPermutations(dungeons, dungeons.length);
    
    for (let i = 0; i < permutaions.length; i++) {
        const curPath = permutaions[i]
        let curHp = k;
        let count = 0;
        
        for (let j = 0; j < curPath.length; j++) {
             const curDungeon = curPath[j]
             const [minHp, useHp] = curDungeon
             
             if (curHp >= minHp) {
                 count++
                 curHp -= useHp
             }
        }
        answer = Math.max(answer, count)
    }
    return answer;
}

