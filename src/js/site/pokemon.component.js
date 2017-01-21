class PokemonComponent extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm-12 pokemon">
                    <div className="card white">
                        <div className="heading">
                            <label className="card-title">000 Pokemon</label>
                        </div>
                        <div className="body">
                            <div className="builder-col">
                                <div className="sprite portrait bulbasaur">
                                </div>
                                <div className="form-group">
                                    <input type="text" id="nickname" name="nickname" className="form-control" />
                                    <label htmlFor="nickname" className="form-control">Nickname</label>
                                </div>
                            </div>
                            <div className="builder-col">
                                <div className="form-group">
                                    <input type="text" id="type" name="type" className="form-control" />
                                    <label htmlFor="type" className="form-control">Type</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="gender" name="gender" className="form-control" />
                                    <label htmlFor="gender" className="form-control">Gender</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="happiness" name="happiness" className="form-control" />
                                    <label htmlFor="happiness" className="form-control">Happiness</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="ability" name="ability" className="form-control" />
                                    <label htmlFor="ability" className="form-control">Ability</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="item" name="item" className="form-control" />
                                    <label htmlFor="item" className="form-control">Held Item</label>
                                </div>
                            </div>
                            <div className="builder-col">
                                <label>Moves</label>
                                <div className="form-group">
                                    <input type="text" id="move1" name="move1" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="move2" name="move2" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="move3" name="move3"  />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="move4" name="move4"  />
                                </div>
                            </div>
                            <div className="builder-col">
                                <label>Statistics</label>
                                    <ul>
                                        <li><ul>
                                            <li className="first"></li>
                                            <li className="second"></li>
                                            <li className="third">EVs</li>
                                        </ul></li>
                                        <li><ul>
                                            <li className="first">HP</li>
                                            <li className="second"></li>
                                            <li className="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li className="first">Atk</li>
                                            <li className="second"></li>
                                            <li className="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li className="first">Def</li>
                                            <li className="second"></li>
                                            <li className="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li className="first">SpAtk</li>
                                            <li className="second"></li>
                                            <li className="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li className="first">SpDef</li>
                                            <li className="second"></li>
                                            <li className="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li className="first">Spd</li>
                                            <li className="second"></li>
                                            <li className="third"></li>
                                        </ul></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}