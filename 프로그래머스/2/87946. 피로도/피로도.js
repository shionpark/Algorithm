function solution(k, dungeons) {
    let answer = -1;
    
    const getPermutations = (arr, num) => {
        if (num === 1) return arr.map((value) => [value]);

        const results = [];
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutaions = getPermutations(rest, num - 1);
            const attached = permutaions.map((value) => [fixed, ...value]);
            results.push(...attached);
        });

        return results;
    };

  const permutaions = getPermutations(dungeons, dungeons.length);
    
  for (let i = 0; i < permutaions.length; i++) {
    const dungeon = permutaions[i];

    let count = 0;
    let hp = k;
    for (let j = 0; j < dungeon.length; j++) {
      const [needHp, useHp] = dungeon[j];
      if (hp >= needHp) {
        count++;
        hp -= useHp;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

