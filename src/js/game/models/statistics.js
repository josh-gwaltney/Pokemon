class Statistics {
    constructor(hp, atk, def, spAtk, spDef, spd){
        this._hp = hp;
        this._attack = atk;
        this._defense = def;
        this._spAttack = spAtk;
        this._spDefense = spDef;
        this._speed =  spd;
    }

    get hp(){
        return this._hp;
    }

    get attack(){
        return this._attack;
    }

    get defense(){
        return this._defense;
    }

    get spAttack(){
        return this._spAttack;
    }

    get spDefense(){
        return this._spDefense;
    }

    get speed(){
        return this._speed;
    }
}