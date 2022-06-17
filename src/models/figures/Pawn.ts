import { Figure } from '../Figure';
import { Color } from '../Color';
import { Cell } from '../Cell';
import whiteLogo from '../../assets/white-pawn.png';
import blackLogo from '../../assets/black-pawn.png';
import { FigureName } from '../FigureName';

export class Pawn extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.White ? whiteLogo : blackLogo;
        this.name = FigureName.Pawn;
    }
}
