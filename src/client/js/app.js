import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Template from './site/template';
import Home from './site/home';
import Pokedex from './site/pokedex';
import UsageStats from './site/usage-stats';
import TeamBuilder from './site/team-builder';
import DamageCalculator from './site/damage-calculator';

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route component={ Template }>
            <Route path="/" component={ Home } />
            <Route path="/pokedex" component={ Pokedex} />
            <Route path="/usage-stats" component={ UsageStats } />
            <Route path="/team-builder" component={ TeamBuilder } />
            <Route path="/damage-calculator" component={ DamageCalculator } />
        </Route>
    </Router>
), document.getElementById('root'));