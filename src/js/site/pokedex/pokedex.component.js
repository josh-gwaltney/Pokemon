class PokedexComponent extends React.Component {
    constructor(){
        super();
    }

    // createOutput(){
    //     let items = [];
    //     for(let idx = 0; idx < this._data.length; idx++){
    //         items.push(<EntryComponent value={ this._data[idx] } />);
    //     }
    //     return ({items});
    // }
    //
    // renderEntry(item){
    //     return (
    //         <EntryComponent value={ item } />
    //     );
    // }

    render(){
        return (
            <div className="pokedex">
                <PokedexSearch />
                <PokedexEntryFull />
            </div>

        );
    }
}

ReactDOM.render(
    <PokedexComponent />,
    document.getElementById('content')
);