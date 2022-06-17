import { Color } from './Color';
import { Figure } from './Figure';
import { Board } from './Board';

export class Cell {
    public readonly x: number;
    public readonly y: number;
    public readonly color: Color;
    public figure: Figure | null;
    public readonly id: string;
    public board: Board;

    constructor(board: Board, x: number, y: number, color: Color, figure: Figure | null, id: string) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.id = id;
    }

    public get isEmpty(): boolean {
        return this.figure === null;
    }
}
