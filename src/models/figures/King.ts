import { Figure } from '../Figure';
import { Color } from '../Color';
import { Cell } from '../Cell';
import whiteLogo from '../../assets/white-king.png';
import blackLogo from '../../assets/black-king.png';
import { FigureName } from '../FigureName';

export class King extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.White ? whiteLogo : blackLogo;
        this.name = FigureName.King;
    }
}
