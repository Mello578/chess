import { Figure } from '../Figure';
import { Color } from '../Color';
import { Cell } from '../Cell';
import whiteLogo from '../../assets/white-knight.png';
import blackLogo from '../../assets/black-knight.png';
import { FigureName } from '../FigureName';

export class Knight extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.White ? whiteLogo : blackLogo;
        this.name = FigureName.Knight;
    }
}
