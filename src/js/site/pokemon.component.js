import React from 'react';
import ReactDOM from 'react-dom';

class PokemonComponent extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div class="row">
                <div class="col-sm-12 pokemon">
                    <div class="card white">
                        <div class="heading">
                            <label class="card-title">000 Pokemon</label>
                        </div>
                        <div class="body">
                            <div class="builder-col">
                                <div class="portrait">
                                </div>
                                <div class="form-group">
                                    <input type="text" id="nickname" name="nickname" class="form-control" />
                                    <label for="nickname" class="form-control">Nickname</label>
                                </div>
                            </div>
                            <div class="builder-col">
                                <div class="form-group">
                                    <input type="text" id="type" name="type" class="form-control" />
                                    <label for="type" class="form-control">Type</label>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="gender" name="gender" class="form-control" />
                                    <label for="gender" class="form-control">Gender</label>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="happiness" name="happiness" class="form-control" />
                                    <label for="happiness" class="form-control">Happiness</label>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="ability" name="ability" class="form-control" />
                                    <label for="ability" class="form-control">Ability</label>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="item" name="item" class="form-control" />
                                    <label for="item" class="form-control">Held Item</label>
                                </div>
                            </div>
                            <div class="builder-col">
                                <label>Moves</label>
                                <div class="form-group">
                                    <input type="text" id="move1" name="move1" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="text" id="move2" name="move2" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="text" id="move3" name="move3" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="text" id="move4" name="move4" class="form-control" />
                                </div>
                            </div>
                            <div class="builder-col">
                                <label>Statistics</label>
                                    <ul>
                                        <li><ul>
                                            <li class="first"></li>
                                            <li class="second"></li>
                                            <li class="third">EVs</li>
                                        </ul></li>
                                        <li><ul>
                                            <li class="first">HP</li>
                                            <li class="second"></li>
                                            <li class="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li class="first">Atk</li>
                                            <li class="second"></li>
                                            <li class="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li class="first">Def</li>
                                            <li class="second"></li>
                                            <li class="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li class="first">SpAtk</li>
                                            <li class="second"></li>
                                            <li class="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li class="first">SpDef</li>
                                            <li class="second"></li>
                                            <li class="third"></li>
                                        </ul></li>
                                        <li><ul>
                                            <li class="first">Spd</li>
                                            <li class="second"></li>
                                            <li class="third"></li>
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

ReactDom.render(
    <PokemonComponent />,
    document.getElementById('content')
);