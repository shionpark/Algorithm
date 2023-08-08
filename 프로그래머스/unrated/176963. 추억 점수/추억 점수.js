// https://velog.io/@bakkomcoder/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B6%94%EC%96%B5-%EC%A0%90%EC%88%98

function solution(name, yearning, photo) {
    const rankMap = {}
    for (let i = 0; i < name.length; i++) {
        rankMap[name[i]] = yearning[i];
    }
    
    const result = photo.map(arr => {
        let rankSum = 0; // 각 사진에 대한 점수 합계 초기화
        
        for (let i = 0; i < arr.length; i++) {
            if (rankMap[arr[i]] !== undefined) {
                rankSum += rankMap[arr[i]]
            } else {
                rankSum += 0; // 해당 이름의 순위가 없을 경우 0으로 처리
            }
        }
        return rankSum;
    })
    
    return result;
}