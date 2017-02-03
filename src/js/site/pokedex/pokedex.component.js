class PokedexComponent extends React.Component {
    constructor(){
        super();

        this._data = [
            {
                "id": 1,
                "name": "Bulbasaur",
                "types": [
                    "Poison",
                    "Grass"
                ],
                "baseStatistics": [
                    45,
                    49,
                    49,
                    65,
                    65,
                    45,
                    273
                ]
                // "baseStatistics": {
                //     "hitPoints": 45,
                //     "attack": 49,
                //     "defense": 49,
                //     "specialAttack": 65,
                //     "specialDefense": 65,
                //     "speed": 45,
                //     "total": 273
                // }
            }
            // ,
            // {
            //     "id": 2,
            //     "name": "Ivysaur",
            //     "types": [
            //         "Poison",
            //         "Grass"
            //     ],
            //     "baseStatistics": {
            //         "hitPoints": 60,
            //         "attack": 62,
            //         "defense": 63,
            //         "specialAttack": 80,
            //         "specialDefense": 80,
            //         "speed": 60,
            //         "total": 345
            //     }
            // },
            //     {
            //     "id": 3,
            //     "name": "Venusaur",
            //     "types": [
            //         "Poison",
            //         "Grass"
            //     ],
            //         "baseStatistics": {
            //         "hitPoints": 80,
            //         "attack": 82,
            //         "defense": 83,
            //         "specialAttack": 100,
            //         "specialDefense": 100,
            //         "speed": 80,
            //         "total": 445
            //     }
            // }
        ];
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
            </div>

        );
    }
}

ReactDOM.render(
    <PokedexComponent />,
    document.getElementById('content')
);