function solution(nums) {
    let mySet = new Set(nums) // 중복 제거
    let max = nums.length / 2
    
    return mySet.size > max ? max : mySet.size
}