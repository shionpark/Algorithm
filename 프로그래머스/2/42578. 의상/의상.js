function solution(clothes) {
    const myMap = new Map();
   
    for (const [cloth, type] of clothes) {
        if (myMap.get(type)) {
            myMap.set(type, myMap.get(type) + 1) 
        }
        else myMap.set(type, 1)
    }
    
    let result = 1
    for (const [key, val] of myMap) {
        result *= val + 1
    }
    return result - 1
    
}