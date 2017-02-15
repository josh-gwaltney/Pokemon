import React from 'react';

import PokedexSearch from './pokedex-search.component';
import PokedexEntryFull from './pokedex-entry-full.component';

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
                <PokedexEntryFull className="is-hidden" />
            </div>

        );
    }
}

export default PokedexComponent;