import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        // If user clicks on occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(board);
        setXisNext(!xIsNext);
    };


    const jumpTo = () => {

    };

    const renderMoves = () => {
        
    };
    
    return (
        <Board squares={board} onClick={handleClick} />
    );
};

export default Game;