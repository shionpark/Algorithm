function solution(array, height) {
    let counter = 0
    array.forEach(i => {
        return i > height ? counter += 1 : counter
    })
    return counter
}