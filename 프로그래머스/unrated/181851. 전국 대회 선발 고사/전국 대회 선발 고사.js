function solution(rank, attendance) {
    let rankMap = {}
    let rankArr = []
    let rankIndex = []
    for (let i = 0; i < rank.length; i++) {
        rankMap[rank[i]] = attendance[i]
        if (attendance[i]) {
            rankArr.push(rank[i])
            rankIndex.push(rank.indexOf(rank[i]))
        }
    }
    let answer = {}
    for (let i = 0; i < rankArr.length; i++) {
        answer[rankArr[i]] = rankIndex[i]
    }
    const value = Object.values(answer);
    const [a, b, c] = value.slice(0, 3)
    return 10000 * a + 100 * b + c;
}