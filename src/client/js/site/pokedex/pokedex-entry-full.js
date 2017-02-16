import React from 'react';

class PokedexEntryFull extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="card entry is-hidden">
                <div className="heading">000 Name</div>
                <div className="body">
                    <div>
                        <div className="fluff">
                            <div className="sprite portrait"></div>
                            <audio controls="controls"></audio>
                        </div>
                        <div className="info">info</div>
                        <div className="statistics">stats</div>
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