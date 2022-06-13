import React, {FC} from 'react';
import './Board.css';
import {CellComponent} from "../Cell/CellComponent";
import {Board} from "../../models/Board";

interface Props {
    board: Board;
    setBoard: (board: Board) => void;
}

export const BoardComponent: FC<Props> = ({board, setBoard}) => {

  return (
    <div className='board'>
        {
            board.cells.map((row, index) =>
            <React.Fragment key={index}>
                {
                    row.map((cell, index) =>
                        <CellComponent key={index + cell.id} color={cell.color} />
                    )
                }
            </React.Fragment>
            )
        }
    </div>
  );
};
