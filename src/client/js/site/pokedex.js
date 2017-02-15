class Pokedex {
    constructor(data){
        this._pokemon = data.pokemon;
    }

    drawPokemon(){
        let parent = document.getElementById('pokedex');
        this._pokemon.forEach((pokemon) => {
            let el = document.createElement('li');
            el.innerHTML = '<div class="pic"></div>'
            //let body = document.createTextNode('<div class="pic"></div>');
            //el.appendChild(body);
                + '<div class="sprite small ${ pokemon.name }"></div>'
                + '</div>'
                + '<div class="name">' + pokemon.name + '</div>'
                + '<div class="types">' + pokemon.types[0] + ', ' + pokemon.types[1] + '</div>'
                + '<div class="abilities"></div>'
                + '<div class="stats"><ul><li>HP</li><li>Atk</li><li>Def</li><li>SpAtk</li><li>SpDef</li><li>Spd</li></ul></div>';
            parent.appendChild(el);
        });

    }
}