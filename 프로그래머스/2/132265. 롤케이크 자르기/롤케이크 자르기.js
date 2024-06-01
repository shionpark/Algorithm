function solution(topping) {
    const toppingCntMap = new Map();
    const bro = new Set();
    
    for (let i = 0; i < topping.length; i++) {
        if (toppingCntMap.has(topping[i])) {
            toppingCntMap.set(topping[i], toppingCntMap.get(topping[i]) + 1);
        } else {
            toppingCntMap.set(topping[i], 1)
        }
    }
    
    let answer = 0;
    
    for (let i = 0; i < topping.length; i++) {
        let count = toppingCntMap.get(topping[i]) - 1;
        bro.add(topping[i])
        
        if (count === 0) {
            toppingCntMap.delete(topping[i])
        } else {
            toppingCntMap.set(topping[i], count)
        }
        
        if (toppingCntMap.size === bro.size) answer++
    }
    
    return answer;
}