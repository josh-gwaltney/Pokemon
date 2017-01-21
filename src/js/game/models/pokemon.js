class Pokemon{
    constructor(base, ivs, evs){
        this._level = 50;
        this._baseStatistics = base;
        this._individualValues =  ivs;
        this._effortValues = evs;
    }

    get hp(){
        let statistic = ((( 2 * this._baseStatistics.hp + this._individualValues.hp + (this._effortValues.hp / 4)) * this._level) / 100) + this._level + 10;
        return Math.floor(statistic);
    }

    get attack(){
        let statistic = ((( 2 * this._baseStatistics.attack + this._individualValues.attack + (this._effortValues.attack / 4)) * this._level) / 100) + 5;
        return Math.floor(statistic);
    }

    get defense(){
        let statistic = ((( 2 * this._baseStatistics.defense + this._individualValues.defense + (this._effortValues.defense / 4)) * this._level) / 100) + 5;
        return Math.floor(statistic);
    }

    get spAttack(){
        let statistic = ((( 2 * this._baseStatistics.spAttack + this._individualValues.spAttack + (this._effortValues.spAttack / 4)) * this._level) / 100) + 5;
        return Math.floor(statistic);
    }

    get spDefense(){
        let statistic = ((( 2 * this._baseStatistics.spDefense + this._individualValues.spDefense + (this._effortValues.spDefense / 4)) * this._level) / 100) + 5;
        return Math.floor(statistic);
    }

    get speed(){
        let statistic = ((( 2 * this._baseStatistics.speed + this._individualValues.speed + (this._effortValues.speed / 4)) * this._level) / 100) + 5;
        return Math.floor(statistic);
    }
}