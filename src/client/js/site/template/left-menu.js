import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class LeftMenu extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="left-menu collapsed">
                <Link to="/">Home</Link><br />
                <Link to="/pokedex">Pokedex</Link><br />
                <Link to="/usage-stats">Usage Stats</Link><br />
                <Link to="/team-builder">Team Builder</Link><br />
                <Link to="/damage-calculator">Damage Calculator</Link><br />
            </div>
        );
    }
}

export default LeftMenu;