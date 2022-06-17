import { Figure } from '../Figure';
import { Color } from '../Color';
import { Cell } from '../Cell';
import whiteLogo from '../../assets/white-tour.png';
import blackLogo from '../../assets/black-tour.png';
import { FigureName } from '../FigureName';

export class Tour extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.White ? whiteLogo : blackLogo;
        this.name = FigureName.Tour;
    }
}
