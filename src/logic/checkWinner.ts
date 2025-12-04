import { DIMENSIONS } from "../constants"

export const checkWinner = (boardToCheck: any[][]) => {
    for (let r = 0; r < DIMENSIONS.ROWS; r++) {
        for (let c = 0; c < DIMENSIONS.COLS; c++) {
            const piece = boardToCheck[r][c];
            if (piece === null) continue;
        
            // Check horizontal
            if (c + 3 < DIMENSIONS.COLS &&
                piece === boardToCheck[r][c + 1] &&
                piece === boardToCheck[r][c + 2] &&
                piece === boardToCheck[r][c + 3]) {
                return piece;
            }
            // Check vertical
            if (r + 3 < DIMENSIONS.ROWS &&
                piece === boardToCheck[r + 1][c] &&
                piece === boardToCheck[r + 2][c] &&
                piece === boardToCheck[r + 3][c]) {
                return piece;
            }
            // Check diagonal down-right
            if (r + 3 < DIMENSIONS.ROWS && c + 3 < DIMENSIONS.COLS &&
                piece === boardToCheck[r + 1][c + 1] &&
                piece === boardToCheck[r + 2][c + 2] &&
                piece === boardToCheck[r + 3][c + 3]) {
                return piece;
            }
            // Check diagonal up-right
            if (r - 3 >= 0 && c + 3 < DIMENSIONS.COLS &&
                piece === boardToCheck[r - 1][c + 1] &&
                piece === boardToCheck[r - 2][c + 2] &&
                piece === boardToCheck[r - 3][c + 3]) {
                return piece;
            }

        }
    }
    return null;
}