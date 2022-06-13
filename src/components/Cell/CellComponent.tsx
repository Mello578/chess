import React, { FC } from 'react';

import './Cell.css';
import { Color } from '../../models/Color';

interface Props {
    color: Color;
}

export const CellComponent: FC<Props> = ({ color }) => {
    const cellClasses = `cell ${color === Color.Black ? 'black' : 'white'}`;
    return <div className={cellClasses}>test</div>;
};
