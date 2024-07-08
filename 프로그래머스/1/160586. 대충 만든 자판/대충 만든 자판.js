function solution(keymap, targets) {
    let dic = {}
    let result = []
    
    keymap.map(key => {
        for (let i = 0; i < key.length; i++) {
            if (!dic[key[i]]) {
                dic[key[i]] = i + 1 
            } else dic[key[i]] = Math.min(dic[key[i]], i+1)
        }
    })
    
    targets.map(target => {
        let count = 0
        for (let i = 0; i < target.length; i++) {
            if (!dic[target[i]]) {
                count = -1
                break
            } else count += dic[target[i]]
        }
        result.push(count)
    })
    return result
}