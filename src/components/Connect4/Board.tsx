import { useState, useEffect } from "react";
import { DIMENSIONS, TURNS, STORAGE_KEYS, PIECE_STYLES } from "../../constants";
import { checkWinner } from "../../logic/checkWinner";
import confetti from "canvas-confetti";
import "./Board.css";

type Player = typeof TURNS[keyof typeof TURNS];

export default function Board() {
    const [board, setBoard] = useState<(Player | null)[][]>(() => {
        const boardFromStorage = window.localStorage.getItem(STORAGE_KEYS.BOARD);
        return boardFromStorage
            ? JSON.parse(boardFromStorage)
            : Array(DIMENSIONS.ROWS).fill(null).map(() => Array(DIMENSIONS.COLS).fill(null));
    });

    const [turn, setTurn] = useState<Player>(() => {
        const turnFromStorage = window.localStorage.getItem(STORAGE_KEYS.TURN);
        return turnFromStorage ? (turnFromStorage as Player) : TURNS.RED;
    });

    const [winner, setWinner] = useState<Player | null | false>(null);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEYS.BOARD, JSON.stringify(board));
        window.localStorage.setItem(STORAGE_KEYS.TURN, turn);
    }, [board, turn]);

    const checkEndGame = (newBoard: (Player | null)[][]) => {
        return newBoard.every(row => row.every(cell => cell !== null));
    }

    const handleColumnClick = (colIndex: number) => {
        if (winner) return;
        const newBoard = board.map((row) => [...row]);
        let placed = false;

        for (let row = DIMENSIONS.ROWS - 1; row >= 0; row--) {
            if (newBoard[row][colIndex] === null) {
                newBoard[row][colIndex] = turn;
                placed = true;
                break;
            }
        }

        if (!placed) return;

        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        
        if (gameWinner) {
            setWinner(gameWinner);
            confetti();
            return;
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
            return;
        }
        else {
            const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED;
            setTurn(newTurn);
        }
    }

    const resetGame = () => {
        setBoard(Array(DIMENSIONS.ROWS).fill(null).map(() => Array(DIMENSIONS.COLS).fill(null)));
        setTurn(TURNS.RED);
        setWinner(null);
        window.localStorage.removeItem(STORAGE_KEYS.BOARD);
        window.localStorage.removeItem(STORAGE_KEYS.TURN);
    }

    return (
        <main className="flex flex-col items-center gap-8 font-sans">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
                Connect <span className="text-yellow-400">4</span>
            </h1>

            <div className="flex items-center gap-4 text-white">
                Turno: 
                <div className={`w-8 h-8 rounded-full ${PIECE_STYLES[turn]}`}></div>
            </div>
            
            <div className="bg-blue-600 p-4 rounded-lg border-b-8 border-blue-800">
                {winner !== null && (
                    <div className="absolute inset-0 z-10 bg-black/50 flex flex-col justify-center items-center rounded-lg backdrop-blur-sm">
                        <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {winner === false ? '¡Empate!' : '¡Ganó!'}
                            </h2>
                            {winner !== false && (
                                <div className={`w-16 h-16 rounded-full ${PIECE_STYLES[winner]}`}></div>
                            )}
                            <button 
                                onClick={resetGame}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold"
                            >
                                Jugar otra vez
                            </button>
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-7 gap-5">
                    {board.map((row, rowIndex) => (
                        row.map((cell, colIndex) => (
                            <div 
                                key={`${rowIndex}-${colIndex}`}
                                onClick={() => handleColumnClick(colIndex)}
                                className="w-12 h-12 bg-blue-700 rounded-full cursor-pointer relative flex justify-center items-center shadow-inner"
                            >
                                {cell && (
                                    <div className={`w-full h-full rounded-full piece ${PIECE_STYLES[cell]}`}></div>
                                )}
                            </div>
                        ))
                    ))}
                </div>
            </div>

            <button 
                onClick={resetGame} 
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
                Reiniciar Juego
            </button>
        </main>
    )
}