function solution(babbling) {
    const canDos = ["aya", "ye", "woo", "ma"]
    let count = 0
    
    for (const item of babbling) {
        let remainingString = item;

        let isCombination = true;

        while (remainingString.length > 0) {
            let found = false;

            for (const word of canDos) {
                if (remainingString.startsWith(word)) {
                    remainingString = remainingString.slice(word.length);
                    found = true;
                    break;
                }
            }

            if (!found) {
                isCombination = false;
                break;
            }
        }

        if (isCombination) {
            count++;
        }
    }
    
    return count
}