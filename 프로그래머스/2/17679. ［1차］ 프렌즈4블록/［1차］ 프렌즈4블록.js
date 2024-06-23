function solution(m, n, board) {
    const matrix = board.map(b => b.split(""));
    
    while (true) {
        const toRemove = new Set()
        
        // findBlocksToRemove
        for (let i = 0; i < matrix.length - 1; i++) {  // row
            for (let j = 0; j < matrix[0].length - 1; j++) { // col
                const block = matrix[i][j];
                if (
                    block &&
                    block === matrix[i + 1][j] &&
                    block === matrix[i][j + 1] &&
                    block === matrix[i + 1][j + 1]
                ) {
                    toRemove.add(`${i},${j}`);
                    toRemove.add(`${i + 1},${j}`);
                    toRemove.add(`${i},${j + 1}`);
                    toRemove.add(`${i + 1},${j + 1}`);
                }
            }
        }
        
        if (toRemove.size === 0) break
        
        // removeBlocks
        toRemove.forEach(rowAndCol => {
            const [row, col] = rowAndCol.split(",").map(Number)
            matrix[row][col] = null;
        })
        
        // dropBlocks
        for (let col = 0; col < matrix[0].length; col++) {
            let emptyRow = matrix.length - 1; // 현재 열에서 비어있는 행
            
            for (let row = matrix.length - 1; row >= 0; row--) {
                if (matrix[row][col] !== null) {
                    const temp = matrix[row][col];
                    matrix[row][col] = matrix[emptyRow][col];
                    matrix[emptyRow][col] = temp;
                    emptyRow--;
                }
            }
            
            for (let row = emptyRow; row >= 0; row--) {
                matrix[row][col] = null // 남은 공간 null로 채우기
            }
        }
    }
    
    return matrix.flat().filter(block => block === null).length;
}