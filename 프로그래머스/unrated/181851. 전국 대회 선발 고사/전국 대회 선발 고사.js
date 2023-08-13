// https://velog.io/@bakkomcoder/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A0%84%EA%B5%AD-%EB%8C%80%ED%9A%8C-%EC%84%A0%EB%B0%9C-%EA%B3%A0%EC%82%AC

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