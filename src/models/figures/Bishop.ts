import { Figure } from '../Figure';
import { Color } from '../Color';
import { Cell } from '../Cell';
import whiteLogo from '../../assets/white-bishop.png';
import blackLogo from '../../assets/black-bishop.png';
import { FigureName } from '../FigureName';

export class Bishop extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.White ? whiteLogo : blackLogo;
        this.name = FigureName.Bishop;
    }
}
