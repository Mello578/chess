import { Figure } from '../Figure';
import { Color } from '../Color';
import { Cell } from '../Cell';
import whiteLogo from '../../assets/white-queen.png';
import blackLogo from '../../assets/black-queen.png';
import { FigureName } from '../FigureName';

export class Queen extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.White ? whiteLogo : blackLogo;
        this.name = FigureName.Queen;
    }
}
