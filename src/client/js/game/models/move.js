class Move {
    constructor(){
        this._id = null;
        this._name = null;
        this._type = null;
        this._category = null;
        this._power = null;
        this._accuracy = null;
        this._effectChance = null;
        this._description = null;
    }

    get name(){
        return this._name;
    }

    get type(){
        return this._type;
    }

    get category(){
        return this._category;
    }
}