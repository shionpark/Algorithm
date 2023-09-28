function solution(my_string) {
    const splited = my_string.split(' ')
    
    let answer = Number(splited[0])
    for(let i = 1; i<splited.length; i++){
        if(splited[i] == '+'){
            answer += Number(splited[i+1])
        }else if(splited[i] == '-'){
            answer -= Number(splited[i+1])
        }
    }
    return answer;
}
