function solution(sizes) {
    let max_list = [];
    let min_list = [];
    
    sizes.map(el => {
        max_list.push(Math.max(...el))
        min_list.push(Math.min(...el))
    })

    let h = Math.max(...max_list)
    let w = Math.max(...min_list)
    return h * w
}