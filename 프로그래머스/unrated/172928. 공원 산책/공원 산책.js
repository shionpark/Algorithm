// https://velog.io/@bakkomcoder/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B3%B5%EC%9B%90-%EC%82%B0%EC%B1%85

function solution(park, routes) {
    // 시작 위치 찾기
    let dog = []
    for (let i = 0; i < park.length; i++) {
        const row = park[i]
        const columnIndex = row.indexOf("S")
        if (columnIndex !== -1) {
            const rowIndex = i
            dog.push(rowIndex, columnIndex)
            break
        }
    }
    
    const map = { "N" : [-1, 0], "S" : [1, 0], "W" : [0, -1], "E" : [0, 1] }
    
    routes.map((route)=>{
        const [loc, n] = route.split(" ")
        let now = dog
        let flag = true
       
        for(let i = 0; i < Number(n); i++){
            now = [now[0] + map[loc][0], now[1] + map[loc][1]]
            // 벽을 넘었는지
            if((now[0] > park.length - 1) || (now[0] < 0) ||(now[1] > park[0].length - 1) ||(now[1] < 0)){
                flag = false
                break
            }
            // 장애물이 있는지
            if(park[now[0]][now[1]] === 'X'){
                flag = false
                break
            } 
        }
        // true면 다 통과한 것
        if (flag) dog = now
    })
    return dog
}