class Point2D {

    constructor(x, y){

        if(!isDefined(x) || !isNotNull(x)){
            throw new Error('Error: x cannot be null');
        }

        if(!isDefined(y) || !isNotNull(y)){
            throw new Error('Error: y cannot be null');
        }

        if(!isNumber(x)){
            throw new Error('Error: x must be a number');
        }

        if(!isNumber(y)){
            throw new Error('Error: y must be a number');
        }

        this._x = x;
        this._y = y;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }
}