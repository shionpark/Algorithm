function solution(phone_number) {
    const mosaic = phone_number.slice(0, phone_number.length - 4).length
    const nums = phone_number.slice(phone_number.length - 4, phone_number.length)
    
    return "*".repeat(mosaic) + nums
}