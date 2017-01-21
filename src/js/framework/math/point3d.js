class Point3D extends Point2D {

    constructor(x, y, z){
        super(x, y);

        if(!isDefined(z) || !isNotNull(z)){
            throw new Error('Error: z cannot be null');
        }

        if(!isNumber(z)){
            throw new Error('Error: z must be a number');
        }

        this._z = z;
    }

    get z(){
        return this._z;
    }
}