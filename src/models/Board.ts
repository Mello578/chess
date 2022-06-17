import { Cell } from './Cell';
import { Color } from './Color';
import { Queen } from './figures/Queen';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Bishop } from './figures/Bishop';
import { Tour } from './figures/Tour';
import { Pawn } from './figures/Pawn';

export class Board {
    private readonly NUMBERS_CELL_ROW = 8;
    private readonly NUMBERS_CELL_LINE = 8;
    public cells: Cell[][] = [];

    public initCells(): void {
        for (let i = 0; i < this.NUMBERS_CELL_LINE; i++) {
            const row: Cell[] = [];
            for (let k = 0; k < this.NUMBERS_CELL_ROW; k++) {
                const color = (i + k) % 2 === 0 ? Color.Black : Color.White;
                row.push(new Cell(this, k, i, color, null, `${i}${k}`));
            }
            this.cells.push(row);
        }
    }

    public getCell(line: number, row: number): Cell {
        return this.cells[row][line];
    }

    private addPawn(): void {
        for (let i = 0; i < 8; i++) {
            new Pawn(Color.White, this.getCell(i, 1));
            new Pawn(Color.Black, this.getCell(i, 6));
        }
    }

    private addTour(): void {
        new Tour(Color.White, this.getCell(0, 0));
        new Tour(Color.Black, this.getCell(0, 7));
        new Tour(Color.White, this.getCell(7, 0));
        new Tour(Color.Black, this.getCell(7, 7));
    }

    private addKnight(): void {
        new Knight(Color.White, this.getCell(1, 0));
        new Knight(Color.Black, this.getCell(1, 7));
        new Knight(Color.White, this.getCell(6, 0));
        new Knight(Color.Black, this.getCell(6, 7));
    }

    private addBishop(): void {
        new Bishop(Color.White, this.getCell(2, 0));
        new Bishop(Color.Black, this.getCell(2, 7));
        new Bishop(Color.White, this.getCell(5, 0));
        new Bishop(Color.Black, this.getCell(5, 7));
    }

    private addQueen(): void {
        new Queen(Color.White, this.getCell(3, 0));
        new Queen(Color.Black, this.getCell(3, 7));
    }

    private addKing(): void {
        new King(Color.White, this.getCell(4, 0));
        new King(Color.Black, this.getCell(4, 7));
    }

    public addFigure() {
        this.addKing();
        this.addQueen();
        this.addKnight();
        this.addBishop();
        this.addTour();
        this.addPawn();
    }

    public checkEmpty() {}
}
