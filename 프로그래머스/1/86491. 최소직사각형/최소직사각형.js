function solution(sizes) {
    let max_list = [];
    let min_list = [];
    
    sizes.map(el => {
        max_list.push(Math.max(...el))
        min_list.push(Math.min(...el))
    })

    let a = Math.max(...max_list)
    let b = Math.max(...min_list)
    return a * b
}