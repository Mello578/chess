import React, { FC, useCallback, useState } from 'react';

import './Board.css';
import { CellComponent } from '../Cell/CellComponent';
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';

interface Props {
    board: Board;
    setBoard: (board: Board) => void;
}

export const BoardComponent: FC<Props> = ({ board }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const handleClick = (cell: Cell) => {
        if (cell.figure) {
            setSelectedCell(cell);
        }
    };

    return (
        <div className="board">
            {board.cells.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map((cell, index) => (
                        <CellComponent
                            key={index + cell.id}
                            cell={cell}
                            isSelected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            handleClick={handleClick}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
