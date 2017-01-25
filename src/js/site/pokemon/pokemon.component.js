class PokemonComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            id: null,
            name: null,

        }

    }
    renderMove(){
        return <MoveComponent />;
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm-12 pokemon">
                    <div className="card white">
                        <div className="heading primary">
                            <label className="card-title">000 Pokemon</label>
                        </div>
                        <div className="body">
                            <div className="builder-col">
                                <div className="sprite portrait bulbasaur">
                                </div>
                                <div className="form-group">
                                    <input type="text" id="nickname" name="nickname" className="form-control" />
                                    <label htmlFor="nickname" >Nickname</label>
                                </div>
                            </div>
                            <div className="builder-col">
                                <div className="type-row">
                                    <div className="type1 grass">
                                        Grass
                                    </div>
                                    <div className="type2 poison">
                                        Poison
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="gender" name="gender" className="form-control" />
                                    <label htmlFor="gender">Gender</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="happiness" name="happiness" className="form-control" />
                                    <label htmlFor="happiness">Happiness</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="ability" name="ability" className="form-control" />
                                    <label htmlFor="ability">Ability</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="item" name="item" className="form-control" />
                                    <label htmlFor="item">Held Item</label>
                                </div>
                            </div>
                            <div className="builder-col">
                                <label>Moves</label>
                                <div className="form-group">
                                    { this.renderMove() }
                                </div>
                                <div className="form-group">
                                    <input type="text" id="move2" name="move2" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="move3" name="move3" className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="move4" name="move4"  className="form-control" />
                                </div>
                            </div>
                            <div className="builder-col">
                                <label>Statistics</label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}