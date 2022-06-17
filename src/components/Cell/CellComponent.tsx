import React, { FC } from 'react';

import './Cell.css';
import { Color } from '../../models/Color';
import { Cell } from '../../models/Cell';

interface Props {
    cell: Cell;
    isSelected: boolean;
    handleClick: (cell: Cell) => void;
    isAvailable: boolean;
}

export const CellComponent: FC<Props> = ({ cell, isSelected, handleClick }) => {
    const cellClasses = `cell ${cell.color === Color.Black ? 'black' : 'white'} ${isSelected ? 'selected' : ''}`;
    return (
        <div className={cellClasses} onClick={() => handleClick(cell)}>
            {cell?.figure?.logo ? <img src={cell.figure.logo} alt="" /> : null}
        </div>
    );
};
