import { Cell } from './Cell';
import { Color } from './Color';

export class Board {
    private readonly NUMBERS_CELL_ROW = 8;
    private readonly NUMBERS_CELL_LINE = 8;
    public cells: Cell[][] = [];

    public initCells(): void {
        for (let i = 0; i < this.NUMBERS_CELL_LINE; i++) {
            const row: Cell[] = [];
            for (let k = 0; k < this.NUMBERS_CELL_ROW; k++) {
                const color = (i + k) % 2 === 0 ? Color.Black : Color.White;
                row.push(new Cell(i, k, color, null, `${i}${k}`));
            }
            this.cells.push(row);
        }
    }
}
