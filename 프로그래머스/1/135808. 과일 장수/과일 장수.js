function solution(k, m, score) {
    const cnt = []
    var li = score.sort((a,b) => b-a);
   
    let sum =0
    
    for(let i = 0; i+m <= li.length; i+=m){
        sum+= li[i+m-1]*m
    }

    return sum;
}