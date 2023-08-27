function solution(chicken) {
    let coupons = chicken;
    let chickensReceived = 0;

    while (coupons >= 10) {
        const freeChickens = Math.floor(coupons / 10);
        chickensReceived += freeChickens;
        coupons = coupons - (freeChickens * 10) + freeChickens;
    }

    return chickensReceived;
}