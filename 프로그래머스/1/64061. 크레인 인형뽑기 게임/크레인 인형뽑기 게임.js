function solution(board, moves) {
    const stack = []
    let count = 0
    
    moves.forEach(m => {
        let col = m - 1
        let row = 0
        while (row < board.length) {
            let current = board[row][col]
            if (current === 0) {
                row += 1
                if (row >= board.length) break
             } else {
                stack.push(current)
                board[row][col] = 0
                 if (stack[stack.length - 1] === stack[stack.length - 2]) {
                     count += 2
                     stack.pop()
                     stack.pop()
                 }
                break
            }
        }
    })
    
    return count
}