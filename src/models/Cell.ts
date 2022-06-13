import { Color } from './Color';
import { Figure } from './Figure';

export class Cell {
    public readonly x: number;
    public readonly y: number;
    public readonly color: Color;
    public figure: Figure | null;
    public readonly id: string;

    constructor(x: number, y: number, color: Color, figure: Figure | null, id: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.id = id;
    }
}
