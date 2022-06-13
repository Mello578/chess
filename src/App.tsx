import React, { useEffect, useState, FC } from 'react';

import './App.css';
import { BoardComponent } from './components/Board/BoardComponent';
import { Board } from './models/Board';

export const App: FC = () => {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }

    return (
        <div className="container">
            <div className="field">
                <BoardComponent board={board} setBoard={setBoard} />
            </div>
        </div>
    );
};
