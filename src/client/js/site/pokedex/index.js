import React from 'react';

import PokedexSearch from './pokedex-search';
import PokedexEntryFull from './pokedex-entry-full';

class PokedexComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false
        }
    }


    render(){
        return (
            <div className="pokedex">
                <PokedexSearch />
                <PokedexEntryFull />
            </div>

        );
    }
}

export default PokedexComponent;