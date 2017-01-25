class TeamBuilderComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            team: new Team()
        };
    }

    renderPokemon(i){
        return <PokemonComponent />;
    }

    handleAdd(){
        this.state.team.add();
        console.log(this.state.team.pokemon);
    }

    render(){
        return (
            <button onClick={ () => this.handleAdd() } >Add</button>
            /*<div>
                {this.renderPokemon(1)}
                <div className="col-sm-12 pokemon">
                    <div className="card white">
                        <div className="heading primary">
                            <label className="card-title">Pokedex</label>
                        </div>
                    </div>
                </div>
            </div>*/
        );
    }

}

//ReactDOM.render(
//    <TeamBuilderComponent />,
//    document.getElementById('team-builder')
//);