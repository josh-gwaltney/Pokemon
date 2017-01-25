"use strict";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateIndividualValue() {
    return randomInt(0, 31);
}

function calculateStatistic(baseValue, individualValue, effortValue, level, natureModifier) {
    // used by all stats
    var statistic = (2 * baseValue + individualValue + effortValue / 4) * level / 100;

    // hp
    // statistic = statistic + level + 10;

    // other
    // statistic = (statistic + 5) * natureModifier;

    return statistic;
}
'use strict';

var data = {
    pokemon: [{
        name: 'Bulbasaur',
        types: ['Grass', 'Poison'],
        baseStats: {
            hp: 45,
            atk: 49,
            def: 49,
            spAtk: 65,
            spDef: 65,
            spd: 45
        }
    }, {
        name: 'Ivysaur',
        types: ['Grass', 'Poison'],
        baseStats: {
            hp: 80,
            atk: 82,
            def: 83,
            spAtk: 100,
            spDef: 100,
            spd: 80
        }
    }]
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
    _classCallCheck(this, Game);

    var img = new Image();
    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAoKCnx8fLccHPRDNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK1Hw0UAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjEyQwRr7AAAA75JREFUeF7t0UEOwkAMBEGS8P8vh6yAP/RaVRf7OurXTYogMU+QY4Q15n93toJcA3yDnOeMIO/tCRIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLECBIjSIwgMYLEDAsywKggI6wxQ4LMIUiMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIDHH4/dua1SQCQSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgRJue8Pmv4EhPvu4ycAAAAASUVORK5CYII=';

    this._topDisplay = new Display({
        parent: 'top-screen',
        height: 240,
        width: 400
    });

    this._bottomDisplay = new Display({
        parent: 'bottom-screen',
        height: 240,
        width: 320
    });

    this._bottomDisplay.drawImage(img);
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pokedex = function () {
    function Pokedex(data) {
        _classCallCheck(this, Pokedex);

        this._pokemon = data.pokemon;
    }

    _createClass(Pokedex, [{
        key: 'drawPokemon',
        value: function drawPokemon() {
            var parent = document.getElementById('pokedex');
            this._pokemon.forEach(function (pokemon) {
                var el = document.createElement('li');
                el.innerHTML = '<div class="pic"></div>'
                //let body = document.createTextNode('<div class="pic"></div>');
                //el.appendChild(body);
                + '<div class="sprite small ${ pokemon.name }"></div>' + '</div>' + '<div class="name">' + pokemon.name + '</div>' + '<div class="types">' + pokemon.types[0] + ', ' + pokemon.types[1] + '</div>' + '<div class="abilities"></div>' + '<div class="stats"><ul><li>HP</li><li>Atk</li><li>Def</li><li>SpAtk</li><li>SpDef</li><li>Spd</li></ul></div>';
                parent.appendChild(el);
            });
        }
    }]);

    return Pokedex;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndividualValueFactory = function () {
    function IndividualValueFactory() {
        _classCallCheck(this, IndividualValueFactory);

        this._rng = new RNG(Date.now());
    }

    _createClass(IndividualValueFactory, [{
        key: "create",
        value: function create() {}
    }]);

    return IndividualValueFactory;
}();
"use strict";

function damage(attacker, defender, move) {
    var damage = ((2 * level / 5 + 2) * attackStat * attackPower / defenseStat / 50 + 2) * STAB * weakness / resistance * random(85 - 100) / 100;
}
"use strict";

function calculateExperienceErratic(level) {
    var experience = void 0;

    if (level < 50) {
        experience = Math.floor(Math.pow(level, 3) * (100 - level) / 50);
    } else if (level >= 50 && level <= 68) {
        experience = Math.floor(Math.pow(level, 3) * (150 - level) / 100);
    } else if (level > 68 && level < 98) {
        experience = Math.floor(Math.pow(level, 3) * ((1911 - 10 * level) / 3) / 500);
    } else if (level >= 98 && level <= 100) {
        experience = Math.floor(Math.pow(level, 3) * (160 - level) / 100);
    }
    return experience;
}

function calculateExperienceFast(level) {
    var experience = Math.floor(4 * Math.pow(level, 3) / 5);
    return experience;
}

function calculateExperienceMediumFast(level) {
    var experience = Math.pow(level, 3);
    return experience;
}

function calculateExperienceMediumSlow(level) {
    var experience = Math.floor(6 / 5 * Math.pow(level, 3) - 15 * Math.pow(level, 2) + 100 * level);
    return experience;
}

function calculateExperienceSlow(level) {
    var experience = Math.floor(5 * Math.pow(level, 3) / 4);
    return experience;
}

function calculateExperienceFluctuating(level) {
    var experience = void 0;

    if (level < 15) {
        experience = Math.pow(level, 3) * (((level + 1) / 3 + 24) / 50);
    } else if (level >= 15 && level < 36) {
        experience = Math.pow(level, 3) * ((level + 24) / 50);
    } else if (level >= 36 && level <= 100) {
        experience = Math.pow(level, 3) * ((level / 2 + 32) / 50);
    }

    return experience;
}
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Move = function () {
    function Move() {
        _classCallCheck(this, Move);

        this._id = null;
        this._name = null;
        this._type = null;
        this._category = null;
        this._power = null;
        this._accuracy = null;
        this._effectChance = null;
        this._description = null;
    }

    _createClass(Move, [{
        key: "name",
        get: function get() {
            return this._name;
        }
    }, {
        key: "type",
        get: function get() {
            return this._type;
        }
    }, {
        key: "category",
        get: function get() {
            return this._category;
        }
    }]);

    return Move;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokedexEntry = function PokedexEntry() {
    _classCallCheck(this, PokedexEntry);

    this._id = null;
    this._name = null;
    this._baseStatistics = new Statistics();
    this._effortValueYields = new Statistics();
    this._description = null;
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pokemon = function () {
    function Pokemon(base, ivs, evs) {
        _classCallCheck(this, Pokemon);

        this._level = 50;
        this._baseStatistics = base;
        this._individualValues = ivs;
        this._effortValues = evs;
    }

    _createClass(Pokemon, [{
        key: "hp",
        get: function get() {
            var statistic = (2 * this._baseStatistics.hp + this._individualValues.hp + this._effortValues.hp / 4) * this._level / 100 + this._level + 10;
            return Math.floor(statistic);
        }
    }, {
        key: "attack",
        get: function get() {
            var statistic = (2 * this._baseStatistics.attack + this._individualValues.attack + this._effortValues.attack / 4) * this._level / 100 + 5;
            return Math.floor(statistic);
        }
    }, {
        key: "defense",
        get: function get() {
            var statistic = (2 * this._baseStatistics.defense + this._individualValues.defense + this._effortValues.defense / 4) * this._level / 100 + 5;
            return Math.floor(statistic);
        }
    }, {
        key: "spAttack",
        get: function get() {
            var statistic = (2 * this._baseStatistics.spAttack + this._individualValues.spAttack + this._effortValues.spAttack / 4) * this._level / 100 + 5;
            return Math.floor(statistic);
        }
    }, {
        key: "spDefense",
        get: function get() {
            var statistic = (2 * this._baseStatistics.spDefense + this._individualValues.spDefense + this._effortValues.spDefense / 4) * this._level / 100 + 5;
            return Math.floor(statistic);
        }
    }, {
        key: "speed",
        get: function get() {
            var statistic = (2 * this._baseStatistics.speed + this._individualValues.speed + this._effortValues.speed / 4) * this._level / 100 + 5;
            return Math.floor(statistic);
        }
    }]);

    return Pokemon;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Statistics = function () {
    function Statistics(hp, atk, def, spAtk, spDef, spd) {
        _classCallCheck(this, Statistics);

        this._hp = hp;
        this._attack = atk;
        this._defense = def;
        this._spAttack = spAtk;
        this._spDefense = spDef;
        this._speed = spd;
    }

    _createClass(Statistics, [{
        key: "hp",
        get: function get() {
            return this._hp;
        }
    }, {
        key: "attack",
        get: function get() {
            return this._attack;
        }
    }, {
        key: "defense",
        get: function get() {
            return this._defense;
        }
    }, {
        key: "spAttack",
        get: function get() {
            return this._spAttack;
        }
    }, {
        key: "spDefense",
        get: function get() {
            return this._spDefense;
        }
    }, {
        key: "speed",
        get: function get() {
            return this._speed;
        }
    }]);

    return Statistics;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Team = function () {
    function Team() {
        _classCallCheck(this, Team);

        this._pokemon = [];
    }

    _createClass(Team, [{
        key: "add",
        value: function add() {
            if (this._pokemon.length < 6) {
                var base = new Statistics(45, 49, 49, 65, 65, 45);
                var ivs = new Statistics(31, 31, 31, 31, 31, 31);
                var evs = new Statistics(0, 0, 0, 0, 0, 0);
                var pokemon = new Pokemon(base, ivs, evs);
                this._pokemon.push(pokemon);
            }
        }
    }, {
        key: "pokemon",
        get: function get() {
            return this._pokemon;
        }
    }]);

    return Team;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Type = function () {
    function Type(name) {
        _classCallCheck(this, Type);

        this._name = name;
    }

    _createClass(Type, [{
        key: "name",
        get: function get() {
            return this._name;
        }
    }]);

    return Type;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokedexComponent = function (_React$Component) {
    _inherits(PokedexComponent, _React$Component);

    function PokedexComponent() {
        _classCallCheck(this, PokedexComponent);

        return _possibleConstructorReturn(this, (PokedexComponent.__proto__ || Object.getPrototypeOf(PokedexComponent)).call(this));
    }

    _createClass(PokedexComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-12" },
                    React.createElement(
                        "div",
                        { className: "card white" },
                        React.createElement(
                            "div",
                            { className: "heading primary" },
                            React.createElement("title", { className: "card-title" })
                        ),
                        React.createElement(
                            "div",
                            { className: "body" },
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement("input", { className: "form-control" })
                            ),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "div",
                                        { className: "icon" },
                                        "1"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "name" },
                                        "Bulbasaur"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "types" },
                                        "Grass Poison"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "abilities" },
                                        "Overgrow Chlorophyll"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "45"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "49"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "49"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "65"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "65"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "45"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "stat" },
                                        "318"
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PokedexComponent;
}(React.Component);

ReactDOM.render(React.createElement(PokedexComponent, null), document.getElementById('pokedex'));
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokemonEntryComponent = function (_React$Component) {
    _inherits(PokemonEntryComponent, _React$Component);

    function PokemonEntryComponent() {
        _classCallCheck(this, PokemonEntryComponent);

        return _possibleConstructorReturn(this, (PokemonEntryComponent.__proto__ || Object.getPrototypeOf(PokemonEntryComponent)).call(this));
    }

    _createClass(PokemonEntryComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                React.createElement(
                    "div",
                    { className: "icon" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "name" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "types" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "abilities" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                ),
                React.createElement(
                    "div",
                    { className: "stat" },
                    "1"
                )
            );
        }
    }]);

    return PokemonEntryComponent;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoveComponent = function (_React$Component) {
    _inherits(MoveComponent, _React$Component);

    function MoveComponent() {
        _classCallCheck(this, MoveComponent);

        var _this = _possibleConstructorReturn(this, (MoveComponent.__proto__ || Object.getPrototypeOf(MoveComponent)).call(this));

        _this.state = {};
        return _this;
    }

    _createClass(MoveComponent, [{
        key: "render",
        value: function render() {
            return React.createElement("input", { type: "text", className: "form-control", onClick: function onClick() {
                    return alert('test');
                } });
        }
    }]);

    return MoveComponent;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokemonComponent = function (_React$Component) {
    _inherits(PokemonComponent, _React$Component);

    function PokemonComponent() {
        _classCallCheck(this, PokemonComponent);

        var _this = _possibleConstructorReturn(this, (PokemonComponent.__proto__ || Object.getPrototypeOf(PokemonComponent)).call(this));

        _this.state = {
            id: null,
            name: null

        };

        return _this;
    }

    _createClass(PokemonComponent, [{
        key: "renderMove",
        value: function renderMove() {
            return React.createElement(MoveComponent, null);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-12 pokemon" },
                    React.createElement(
                        "div",
                        { className: "card white" },
                        React.createElement(
                            "div",
                            { className: "heading primary" },
                            React.createElement(
                                "label",
                                { className: "card-title" },
                                "000 Pokemon"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "body" },
                            React.createElement(
                                "div",
                                { className: "builder-col" },
                                React.createElement("div", { className: "sprite portrait bulbasaur" }),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "nickname", name: "nickname", className: "form-control" }),
                                    React.createElement(
                                        "label",
                                        { htmlFor: "nickname" },
                                        "Nickname"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "builder-col" },
                                React.createElement(
                                    "div",
                                    { className: "type-row" },
                                    React.createElement(
                                        "div",
                                        { className: "type1 grass" },
                                        "Grass"
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "type2 poison" },
                                        "Poison"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "gender", name: "gender", className: "form-control" }),
                                    React.createElement(
                                        "label",
                                        { htmlFor: "gender" },
                                        "Gender"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "happiness", name: "happiness", className: "form-control" }),
                                    React.createElement(
                                        "label",
                                        { htmlFor: "happiness" },
                                        "Happiness"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "ability", name: "ability", className: "form-control" }),
                                    React.createElement(
                                        "label",
                                        { htmlFor: "ability" },
                                        "Ability"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "item", name: "item", className: "form-control" }),
                                    React.createElement(
                                        "label",
                                        { htmlFor: "item" },
                                        "Held Item"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "builder-col" },
                                React.createElement(
                                    "label",
                                    null,
                                    "Moves"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    this.renderMove()
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "move2", name: "move2", className: "form-control" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "move3", name: "move3", className: "form-control" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement("input", { type: "text", id: "move4", name: "move4", className: "form-control" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "builder-col" },
                                React.createElement(
                                    "label",
                                    null,
                                    "Statistics"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PokemonComponent;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamBuilderComponent = function (_React$Component) {
    _inherits(TeamBuilderComponent, _React$Component);

    function TeamBuilderComponent() {
        _classCallCheck(this, TeamBuilderComponent);

        var _this = _possibleConstructorReturn(this, (TeamBuilderComponent.__proto__ || Object.getPrototypeOf(TeamBuilderComponent)).call(this));

        _this.state = {
            team: new Team()
        };
        return _this;
    }

    _createClass(TeamBuilderComponent, [{
        key: "renderPokemon",
        value: function renderPokemon(i) {
            return React.createElement(PokemonComponent, null);
        }
    }, {
        key: "handleAdd",
        value: function handleAdd() {
            this.state.team.add();
            console.log(this.state.team.pokemon);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "button",
                { onClick: function onClick() {
                        return _this2.handleAdd();
                    } },
                "Add"
            )
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
            ;
        }
    }]);

    return TeamBuilderComponent;
}(React.Component);

//ReactDOM.render(
//    <TeamBuilderComponent />,
//    document.getElementById('team-builder')
//);