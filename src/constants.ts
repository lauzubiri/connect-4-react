export const TURNS = {
    RED: '🔴',
    YELLOW: '🟡',
} as const;

export const DIMENSIONS = {
    COLS: 7,
    ROWS: 6,
} as const;

export const PIECE_STYLES = {
    [TURNS.RED]: 'bg-red-500 shadow-red-900',
    [TURNS.YELLOW]: 'bg-yellow-400 shadow-yellow-700',
} as const;

export const STORAGE_KEYS = {
    BOARD: 'connect4-board',
    TURN: 'connect4-turn',
} as const;