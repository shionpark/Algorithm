function solution(id_list, report, k) {
    // 신고자 배열
    const answer = new Array(id_list.length);
    answer.fill(0) 

    // key로 userid를 value로 빈 배열을 가지는 객체
    const userReports = {}
    id_list.map((user)=>{
        userReports[user] = []  
    })
    console.log(userReports) // { muzi: [], frodo: [], apeach: [], neo: [] }
    
    // 신고한 사람을 넣는 빈 배열에 넣음
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!userReports[report_id].includes(user_id)){
            userReports[report_id].push(user_id)
        }        
    })
    
    // 신고 당한 사람(reported)이 이용정지 유저라면, 신고인(reporter)에게 +1
    for(const key in userReports){
        if(userReports[key].length >= k){   // 이용정지 유저
            userReports[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    
    return answer
}