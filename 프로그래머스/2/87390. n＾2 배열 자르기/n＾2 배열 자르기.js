function solution(n, left, right) {
    let arr = [];
    for (let y = 1; y <= n; y++) {
        // y=0
        arr[y-1] = [];
        for (let x = 1; x <= n; x++) {
            // y=0, x=0
            arr[y][x] = `${y},${x}`;
            console.log(y, x, arr)
            // y=0, x=1
        }
    }
    return arr;
    // return answer;
}