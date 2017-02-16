import React from 'react';

import PokedexEntryShort from './pokedex-entry-short';

class PokedexSearch extends React.Component {
    constructor(){
        super();

        this._data = require('./data');
    }

    handleClick(x){
        console.log(x);
    }

    render(){
        return (
            <div className="card search">
                <div className="heading">heading</div>
                <div className="body">
                    <div className="tab-bar">
                        <div className="tab">Pokemon</div>
                        <div className="tab">Moves</div>
                        <div className="tab">Abilities</div>
                        <div className="tab">Items</div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="results">
                        { this._data.map((x, i) =>
                            <PokedexEntryShort value={x} key={i} onClick={ () => this.handleClick(x) } />
                        ) }
                    </div>
                </div>
            </div>
        );
    }
}

export default PokedexSearch;