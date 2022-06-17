import logo from '../assets/black-bishop.png';

import { Color } from './Color';
import { FigureName } from './FigureName';
import { Cell } from './Cell';

type Logo = typeof logo | null;

export class Figure {
    public readonly id: string;
    public readonly color: Color;
    public logo: Logo;
    public name: FigureName;
    public cell: Cell;

    constructor(color: Color, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.name = FigureName.Empty;
        this.logo = null;
        this.id = `${this.cell.x}${this.cell.y}${this.name}`;
    }

    public canMove(newCell: Cell): boolean {
        return newCell.isEmpty;
    }

    public moveFigure(): string {
        return '';
    }
}
