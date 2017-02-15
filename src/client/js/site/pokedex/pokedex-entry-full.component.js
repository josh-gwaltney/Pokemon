import React from 'react';

class PokedexEntryFull extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="card entry">
                <div className="heading">000 Name</div>
                <div className="body">
                    <div>
                        <div>
                            <div className="sprites portrait"></div>
                            <audio controls="controls"></audio>
                        </div>
                        <div>info</div>
                        <div>stats</div>
                    </div>
                    <div>abilities</div>
                    <div>evolutions</div>
                    <div>forms</div>
                    <div>moves</div>
                </div>
            </div>
        );
    }
}

export default PokedexEntryFull;