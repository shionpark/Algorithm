function solution(phone_book) {
    phone_book.sort()
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        let current = phone_book[i]
        let next = phone_book[i + 1].substring(0, phone_book[i].length)
        if (current === next) return false
    }
    
    return true;
}