function solution(wallpaper) {
    const start = new Array(2).fill(100);
    const end = new Array(2).fill(0);
    
    wallpaper.forEach((x,idx)=>{
        // "#"을 가진 배열을 일일이 순회하면서    
        if(x.includes('#')){
            start[0] = Math.min(start[0], idx); // 현재 값과 idx를 비교
            start[1] = Math.min(start[1], x.indexOf('#')); // 현재 값과 "#"의 최소 인덱스를 비교 
            end[0] = Math.max(end[0], idx) ;    // 현재 값과 idx를 비교
            end[1] = Math.max(end[1], x.lastIndexOf('#'));  // 현재 값과 "#"의 최대 인덱스를 비교 덱스를 비교
        }
    })
    end[0] += 1;
    end[1] += 1;
    return [...start,...end];
}