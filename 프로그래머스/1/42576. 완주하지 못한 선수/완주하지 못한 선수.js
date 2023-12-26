function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        // 두 배열에 모두 존재하면 0이 될 것
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [key, value] of map) {
        if(value > 0) return key;
    }

    return 'nothing';
}
