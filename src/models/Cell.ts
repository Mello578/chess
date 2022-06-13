import {Color} from "./Color";
import {Figure} from "./Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    figure: Figure | null;
    readonly id: string;

    constructor(x: number, y: number, color: Color, figure: Figure | null, id: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.id = id;
    }
}
