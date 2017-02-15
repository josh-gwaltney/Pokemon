class Team {
    constructor(){
        this._pokemon = [];
    }

    get pokemon(){
        return this._pokemon;
    }

    add(){
        if(this._pokemon.length < 6 ){
            let base = new Statistics(45, 49, 49, 65, 65, 45);
            let ivs = new Statistics(31, 31, 31, 31, 31, 31);
            let evs = new Statistics(0, 0, 0, 0, 0, 0);
            let pokemon = new Pokemon(base, ivs, evs);
            this._pokemon.push(pokemon);
        }
    }
}
