function solution(nums) {
    let mySet = [...new Set(nums)] // 중복 제거
    let max = nums.length / 2
    
    return mySet.length > max ? max : mySet.length
}