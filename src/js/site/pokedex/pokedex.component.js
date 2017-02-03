class PokedexComponent extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="card search">
                <div className="heading">heading</div>
                <div className="body">
                    <div className="form-group">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="results">
                        <div className="pokemon">
                            <div className="icon">icon</div>
                            <div className="name">name</div>
                            <div className="types">types</div>
                            <div className="abilities">abilities</div>
                            <div className="statistics">statistics</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <PokedexComponent />,
    document.getElementById('pokedex')
);