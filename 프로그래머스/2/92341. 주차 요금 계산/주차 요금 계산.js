function solution(fees, records) {
    let myMap = new Map();
    let resultMap = new Map();
    let answer = 0;
    let arr = [];
    
    records.map((record) => {
        const [time, car, way] = record.split(" ");
        
        const [hour, minute] = time.split(":").map(Number);
        const times = hour * 60 + minute;
        
        if (!myMap.get(car)) myMap.set(car, 0);
        if (!resultMap.get(car)) resultMap.set(car, 0);
        
        if (way === "IN") {
            myMap.set(car, myMap.get(car) + times);
        }
        else if (way === "OUT") {
            resultMap.set(car, resultMap.get(car) + times - myMap.get(car));   
            myMap.delete(car);
        }
    })
    
    const deadLine = 23 * 60 + 59;
    for (const [key, value] of myMap.entries()) {
        if (myMap.has(key)) {
            resultMap.set(key, resultMap.get(key) + deadLine - myMap.get(key));
        }
    }
    
    
    const mapToArr = [...resultMap];
    const sortedArr = mapToArr.sort((a, b) => a[0] - b[0])
    const sortedMap = new Map(sortedArr);
    
    for (const [key, value] of sortedMap.entries()) {
        if (value <= fees[0]) {
            answer = fees[1];
        }
        else {
            answer = fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3];
        }
        arr.push(answer)
    }
    
    return arr;
} 