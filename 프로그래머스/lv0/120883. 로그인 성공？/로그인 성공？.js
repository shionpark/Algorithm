function solution(id_pw, db) {
    // db 분리
    let id = []
    let pw = []
    db.map(item=> {
        id.push(item[0])
        pw.push(item[1])
    })
    
    const userId = id_pw[0]
    const userPw = id_pw[1]
    // db에 userId가 있다면 login
    if (id.includes(userId)) {
        const idx = id.indexOf(userId)
        return userPw === pw[idx] ? "login" : "wrong pw"
    } else {
        // db에 userId가 없을 경우
        return "fail"
    }
    
    
}