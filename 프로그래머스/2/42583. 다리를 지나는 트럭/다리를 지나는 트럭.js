function solution(bridge_length, weight, truck_weights) {
    let answer = 0
    let bridgeWeight = 0
    let bridge = []
    
    answer++
    bridgeWeight = truck_weights[0]
    bridge.push(truck_weights.shift())
    
    while (bridge.length > 0) {
        answer++
        
        if (answer > bridge_length) {
            bridgeWeight -= bridge.shift()
        }

        if (bridgeWeight + truck_weights[0] > weight) {
            bridge.push(0)
        } else {
            if (truck_weights.length > 0) {
                bridge.push(truck_weights[0])
                bridgeWeight += truck_weights.shift()   
            }
        }
        
    }
    return answer
}