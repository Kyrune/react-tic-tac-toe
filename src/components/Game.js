import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const styles = {
    width: '200px',
    margin: '20px auto',
    color: 'oldlace'
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        // If user clicks on occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setHistory(boardCopy);
        setXisNext(!xIsNext);
    };


    const jumpTo = () => {

    };

    const renderMoves = () => (
        <button onClick={() => setHistory(Array(9).fill(null))}>
            Start Game
        </button>
    );
    
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    );
};

export default Game;