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
"use strict";
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

document.data = [{
    "id": 1,
    "name": "Bulbasaur",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 49,
        "defense": 49,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 45,
        "total": 273
    }
}, {
    "id": 2,
    "name": "Ivysaur",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 62,
        "defense": 63,
        "specialAttack": 80,
        "specialDefense": 80,
        "speed": 60,
        "total": 345
    }
}, {
    "id": 3,
    "name": "Venusaur",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 82,
        "defense": 83,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 80,
        "total": 445
    }
}, {
    "id": 4,
    "name": "Charmander",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 39,
        "attack": 52,
        "defense": 43,
        "specialAttack": 60,
        "specialDefense": 50,
        "speed": 65,
        "total": 270
    }
}, {
    "id": 5,
    "name": "Charmeleon",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 58,
        "attack": 64,
        "defense": 58,
        "specialAttack": 80,
        "specialDefense": 65,
        "speed": 80,
        "total": 347
    }
}, {
    "id": 6,
    "name": "Charizard",
    "types": ["Flying", "Fire"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 84,
        "defense": 78,
        "specialAttack": 109,
        "specialDefense": 85,
        "speed": 100,
        "total": 456
    }
}, {
    "id": 7,
    "name": "Squirtle",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 48,
        "defense": 65,
        "specialAttack": 50,
        "specialDefense": 64,
        "speed": 43,
        "total": 270
    }
}, {
    "id": 8,
    "name": "Wartortle",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 59,
        "attack": 63,
        "defense": 80,
        "specialAttack": 65,
        "specialDefense": 80,
        "speed": 58,
        "total": 346
    }
}, {
    "id": 9,
    "name": "Blastoise",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 79,
        "attack": 83,
        "defense": 100,
        "specialAttack": 85,
        "specialDefense": 105,
        "speed": 78,
        "total": 451
    }
}, {
    "id": 10,
    "name": "Caterpie",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 30,
        "defense": 35,
        "specialAttack": 20,
        "specialDefense": 20,
        "speed": 45,
        "total": 150
    }
}, {
    "id": 11,
    "name": "Metapod",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 20,
        "defense": 55,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 30,
        "total": 155
    }
}, {
    "id": 12,
    "name": "Butterfree",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 45,
        "defense": 50,
        "specialAttack": 90,
        "specialDefense": 80,
        "speed": 70,
        "total": 335
    }
}, {
    "id": 13,
    "name": "Weedle",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 35,
        "defense": 30,
        "specialAttack": 20,
        "specialDefense": 20,
        "speed": 50,
        "total": 155
    }
}, {
    "id": 14,
    "name": "Kakuna",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 25,
        "defense": 50,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 35,
        "total": 160
    }
}, {
    "id": 15,
    "name": "Beedrill",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 90,
        "defense": 40,
        "specialAttack": 45,
        "specialDefense": 80,
        "speed": 75,
        "total": 330
    }
}, {
    "id": 16,
    "name": "Pidgey",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 40,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 56,
        "total": 211
    }
}, {
    "id": 17,
    "name": "Pidgeotto",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 63,
        "attack": 60,
        "defense": 55,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 71,
        "total": 286
    }
}, {
    "id": 18,
    "name": "Pidgeot",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 83,
        "attack": 80,
        "defense": 75,
        "specialAttack": 70,
        "specialDefense": 70,
        "speed": 101,
        "total": 396
    }
}, {
    "id": 19,
    "name": "Rattata",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 56,
        "defense": 35,
        "specialAttack": 25,
        "specialDefense": 35,
        "speed": 72,
        "total": 223
    }
}, {
    "id": 20,
    "name": "Raticate",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 81,
        "defense": 60,
        "specialAttack": 50,
        "specialDefense": 70,
        "speed": 97,
        "total": 358
    }
}, {
    "id": 21,
    "name": "Spearow",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 60,
        "defense": 30,
        "specialAttack": 31,
        "specialDefense": 31,
        "speed": 70,
        "total": 222
    }
}, {
    "id": 22,
    "name": "Fearow",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 90,
        "defense": 65,
        "specialAttack": 61,
        "specialDefense": 61,
        "speed": 100,
        "total": 377
    }
}, {
    "id": 23,
    "name": "Ekans",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 60,
        "defense": 44,
        "specialAttack": 40,
        "specialDefense": 54,
        "speed": 55,
        "total": 253
    }
}, {
    "id": 24,
    "name": "Arbok",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 95,
        "defense": 69,
        "specialAttack": 65,
        "specialDefense": 79,
        "speed": 80,
        "total": 388
    }
}, {
    "id": 25,
    "name": "Pikachu",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 55,
        "defense": 40,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 90,
        "total": 285
    }
}, {
    "id": 26,
    "name": "Raichu",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 90,
        "defense": 55,
        "specialAttack": 90,
        "specialDefense": 80,
        "speed": 110,
        "total": 425
    }
}, {
    "id": 27,
    "name": "Sandshrew",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 75,
        "defense": 85,
        "specialAttack": 20,
        "specialDefense": 30,
        "speed": 40,
        "total": 250
    }
}, {
    "id": 28,
    "name": "Sandslash",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 100,
        "defense": 110,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 65,
        "total": 375
    }
}, {
    "id": 29,
    "name": "Nidoran (F)",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 47,
        "defense": 52,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 41,
        "total": 220
    }
}, {
    "id": 30,
    "name": "Nidorina",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 62,
        "defense": 67,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 56,
        "total": 295
    }
}, {
    "id": 31,
    "name": "Nidoqueen",
    "types": ["Poison", "Ground"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 92,
        "defense": 87,
        "specialAttack": 75,
        "specialDefense": 85,
        "speed": 76,
        "total": 415
    }
}, {
    "id": 32,
    "name": "Nidoran (M)",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 46,
        "attack": 57,
        "defense": 40,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 50,
        "total": 227
    }
}, {
    "id": 33,
    "name": "Nidorino",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 61,
        "attack": 72,
        "defense": 57,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 65,
        "total": 304
    }
}, {
    "id": 34,
    "name": "Nidoking",
    "types": ["Poison", "Ground"],
    "baseStatistics": {
        "hitPoints": 81,
        "attack": 102,
        "defense": 77,
        "specialAttack": 85,
        "specialDefense": 75,
        "speed": 85,
        "total": 424
    }
}, {
    "id": 35,
    "name": "Clefairy",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 45,
        "defense": 48,
        "specialAttack": 60,
        "specialDefense": 65,
        "speed": 35,
        "total": 253
    }
}, {
    "id": 36,
    "name": "Clefable",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 70,
        "defense": 73,
        "specialAttack": 95,
        "specialDefense": 90,
        "speed": 60,
        "total": 388
    }
}, {
    "id": 37,
    "name": "Vulpix",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 41,
        "defense": 40,
        "specialAttack": 50,
        "specialDefense": 65,
        "speed": 65,
        "total": 261
    }
}, {
    "id": 38,
    "name": "Ninetales",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 73,
        "attack": 76,
        "defense": 75,
        "specialAttack": 81,
        "specialDefense": 100,
        "speed": 100,
        "total": 432
    }
}, {
    "id": 39,
    "name": "Jigglypuff",
    "types": ["Normal", "Fairy"],
    "baseStatistics": {
        "hitPoints": 115,
        "attack": 45,
        "defense": 20,
        "specialAttack": 45,
        "specialDefense": 25,
        "speed": 20,
        "total": 155
    }
}, {
    "id": 40,
    "name": "Wigglytuff",
    "types": ["Normal", "Fairy"],
    "baseStatistics": {
        "hitPoints": 140,
        "attack": 70,
        "defense": 45,
        "specialAttack": 85,
        "specialDefense": 50,
        "speed": 45,
        "total": 295
    }
}, {
    "id": 41,
    "name": "Zubat",
    "types": ["Flying", "Poison"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 35,
        "specialAttack": 30,
        "specialDefense": 40,
        "speed": 55,
        "total": 205
    }
}, {
    "id": 42,
    "name": "Golbat",
    "types": ["Flying", "Poison"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 80,
        "defense": 70,
        "specialAttack": 65,
        "specialDefense": 75,
        "speed": 90,
        "total": 380
    }
}, {
    "id": 43,
    "name": "Oddish",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 50,
        "defense": 55,
        "specialAttack": 75,
        "specialDefense": 65,
        "speed": 30,
        "total": 275
    }
}, {
    "id": 44,
    "name": "Gloom",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 65,
        "defense": 70,
        "specialAttack": 85,
        "specialDefense": 75,
        "speed": 40,
        "total": 335
    }
}, {
    "id": 45,
    "name": "Vileplume",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 80,
        "defense": 85,
        "specialAttack": 110,
        "specialDefense": 90,
        "speed": 50,
        "total": 415
    }
}, {
    "id": 46,
    "name": "Paras",
    "types": ["Bug", "Grass"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 70,
        "defense": 55,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 25,
        "total": 250
    }
}, {
    "id": 47,
    "name": "Parasect",
    "types": ["Bug", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 95,
        "defense": 80,
        "specialAttack": 60,
        "specialDefense": 80,
        "speed": 30,
        "total": 345
    }
}, {
    "id": 48,
    "name": "Venonat",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 55,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 55,
        "speed": 45,
        "total": 245
    }
}, {
    "id": 49,
    "name": "Venomoth",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 65,
        "defense": 60,
        "specialAttack": 90,
        "specialDefense": 75,
        "speed": 90,
        "total": 380
    }
}, {
    "id": 50,
    "name": "Diglett",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 10,
        "attack": 55,
        "defense": 25,
        "specialAttack": 35,
        "specialDefense": 45,
        "speed": 95,
        "total": 255
    }
}, {
    "id": 51,
    "name": "Dugtrio",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 100,
        "defense": 50,
        "specialAttack": 50,
        "specialDefense": 70,
        "speed": 120,
        "total": 390
    }
}, {
    "id": 52,
    "name": "Meowth",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 35,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 90,
        "total": 250
    }
}, {
    "id": 53,
    "name": "Persian",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 70,
        "defense": 60,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 115,
        "total": 375
    }
}, {
    "id": 54,
    "name": "Psyduck",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 52,
        "defense": 48,
        "specialAttack": 65,
        "specialDefense": 50,
        "speed": 55,
        "total": 270
    }
}, {
    "id": 55,
    "name": "Golduck",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 82,
        "defense": 78,
        "specialAttack": 95,
        "specialDefense": 80,
        "speed": 85,
        "total": 420
    }
}, {
    "id": 56,
    "name": "Mankey",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 80,
        "defense": 35,
        "specialAttack": 35,
        "specialDefense": 45,
        "speed": 70,
        "total": 265
    }
}, {
    "id": 57,
    "name": "Primeape",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 105,
        "defense": 60,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 95,
        "total": 390
    }
}, {
    "id": 58,
    "name": "Growlithe",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 70,
        "defense": 45,
        "specialAttack": 70,
        "specialDefense": 50,
        "speed": 60,
        "total": 295
    }
}, {
    "id": 59,
    "name": "Arcanine",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 110,
        "defense": 80,
        "specialAttack": 100,
        "specialDefense": 80,
        "speed": 95,
        "total": 465
    }
}, {
    "id": 60,
    "name": "Poliwag",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 50,
        "defense": 40,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 90,
        "total": 260
    }
}, {
    "id": 61,
    "name": "Poliwhirl",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 65,
        "defense": 65,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 90,
        "total": 320
    }
}, {
    "id": 62,
    "name": "Poliwrath",
    "types": ["Fighting", "Water"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 95,
        "defense": 95,
        "specialAttack": 70,
        "specialDefense": 90,
        "speed": 70,
        "total": 420
    }
}, {
    "id": 63,
    "name": "Abra",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 25,
        "attack": 20,
        "defense": 15,
        "specialAttack": 105,
        "specialDefense": 55,
        "speed": 90,
        "total": 285
    }
}, {
    "id": 64,
    "name": "Kadabra",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 35,
        "defense": 30,
        "specialAttack": 120,
        "specialDefense": 70,
        "speed": 105,
        "total": 360
    }
}, {
    "id": 65,
    "name": "Alakazam",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 50,
        "defense": 45,
        "specialAttack": 135,
        "specialDefense": 95,
        "speed": 120,
        "total": 445
    }
}, {
    "id": 66,
    "name": "Machop",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 80,
        "defense": 50,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 35,
        "total": 235
    }
}, {
    "id": 67,
    "name": "Machoke",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 100,
        "defense": 70,
        "specialAttack": 50,
        "specialDefense": 60,
        "speed": 45,
        "total": 325
    }
}, {
    "id": 68,
    "name": "Machamp",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 130,
        "defense": 80,
        "specialAttack": 65,
        "specialDefense": 85,
        "speed": 55,
        "total": 415
    }
}, {
    "id": 69,
    "name": "Bellsprout",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 75,
        "defense": 35,
        "specialAttack": 70,
        "specialDefense": 30,
        "speed": 40,
        "total": 250
    }
}, {
    "id": 70,
    "name": "Weepinbell",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 90,
        "defense": 50,
        "specialAttack": 85,
        "specialDefense": 45,
        "speed": 55,
        "total": 325
    }
}, {
    "id": 71,
    "name": "Victreebel",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 105,
        "defense": 65,
        "specialAttack": 100,
        "specialDefense": 70,
        "speed": 70,
        "total": 410
    }
}, {
    "id": 72,
    "name": "Tentacool",
    "types": ["Poison", "Water"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 40,
        "defense": 35,
        "specialAttack": 50,
        "specialDefense": 100,
        "speed": 70,
        "total": 295
    }
}, {
    "id": 73,
    "name": "Tentacruel",
    "types": ["Poison", "Water"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 70,
        "defense": 65,
        "specialAttack": 80,
        "specialDefense": 120,
        "speed": 100,
        "total": 435
    }
}, {
    "id": 74,
    "name": "Geodude",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 80,
        "defense": 100,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 20,
        "total": 260
    }
}, {
    "id": 75,
    "name": "Graveler",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 95,
        "defense": 115,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 35,
        "total": 335
    }
}, {
    "id": 76,
    "name": "Golem",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 120,
        "defense": 130,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 45,
        "total": 415
    }
}, {
    "id": 77,
    "name": "Ponyta",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 85,
        "defense": 55,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 90,
        "total": 360
    }
}, {
    "id": 78,
    "name": "Rapidash",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 100,
        "defense": 70,
        "specialAttack": 80,
        "specialDefense": 80,
        "speed": 105,
        "total": 435
    }
}, {
    "id": 79,
    "name": "Slowpoke",
    "types": ["Water", "Psychic"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 65,
        "defense": 65,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 15,
        "total": 225
    }
}, {
    "id": 80,
    "name": "Slowbro",
    "types": ["Water", "Psychic"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 75,
        "defense": 110,
        "specialAttack": 100,
        "specialDefense": 80,
        "speed": 30,
        "total": 395
    }
}, {
    "id": 81,
    "name": "Magnemite",
    "types": ["Steel", "Electric"],
    "baseStatistics": {
        "hitPoints": 25,
        "attack": 35,
        "defense": 70,
        "specialAttack": 95,
        "specialDefense": 55,
        "speed": 45,
        "total": 300
    }
}, {
    "id": 82,
    "name": "Magneton",
    "types": ["Steel", "Electric"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 60,
        "defense": 95,
        "specialAttack": 120,
        "specialDefense": 70,
        "speed": 70,
        "total": 415
    }
}, {
    "id": 83,
    "name": "Farfetch'd",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 52,
        "attack": 90,
        "defense": 55,
        "specialAttack": 58,
        "specialDefense": 62,
        "speed": 60,
        "total": 325
    }
}, {
    "id": 84,
    "name": "Doduo",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 85,
        "defense": 45,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 75,
        "total": 275
    }
}, {
    "id": 85,
    "name": "Dodrio",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 110,
        "defense": 70,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 110,
        "total": 410
    }
}, {
    "id": 86,
    "name": "Seel",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 45,
        "defense": 55,
        "specialAttack": 45,
        "specialDefense": 70,
        "speed": 45,
        "total": 260
    }
}, {
    "id": 87,
    "name": "Dewgong",
    "types": ["Water", "Ice"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 70,
        "defense": 80,
        "specialAttack": 70,
        "specialDefense": 95,
        "speed": 70,
        "total": 385
    }
}, {
    "id": 88,
    "name": "Grimer",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 80,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 25,
        "total": 245
    }
}, {
    "id": 89,
    "name": "Muk",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 105,
        "defense": 75,
        "specialAttack": 65,
        "specialDefense": 100,
        "speed": 50,
        "total": 395
    }
}, {
    "id": 90,
    "name": "Shellder",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 65,
        "defense": 100,
        "specialAttack": 45,
        "specialDefense": 25,
        "speed": 40,
        "total": 275
    }
}, {
    "id": 91,
    "name": "Cloyster",
    "types": ["Water", "Ice"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 95,
        "defense": 180,
        "specialAttack": 85,
        "specialDefense": 45,
        "speed": 70,
        "total": 475
    }
}, {
    "id": 92,
    "name": "Gastly",
    "types": ["Poison", "Ghost"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 35,
        "defense": 30,
        "specialAttack": 100,
        "specialDefense": 35,
        "speed": 80,
        "total": 280
    }
}, {
    "id": 93,
    "name": "Haunter",
    "types": ["Poison", "Ghost"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 50,
        "defense": 45,
        "specialAttack": 115,
        "specialDefense": 55,
        "speed": 95,
        "total": 360
    }
}, {
    "id": 94,
    "name": "Gengar",
    "types": ["Poison", "Ghost"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 65,
        "defense": 60,
        "specialAttack": 130,
        "specialDefense": 75,
        "speed": 110,
        "total": 440
    }
}, {
    "id": 95,
    "name": "Onix",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 45,
        "defense": 160,
        "specialAttack": 30,
        "specialDefense": 45,
        "speed": 70,
        "total": 350
    }
}, {
    "id": 96,
    "name": "Drowzee",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 48,
        "defense": 45,
        "specialAttack": 43,
        "specialDefense": 90,
        "speed": 42,
        "total": 268
    }
}, {
    "id": 97,
    "name": "Hypno",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 73,
        "defense": 70,
        "specialAttack": 73,
        "specialDefense": 115,
        "speed": 67,
        "total": 398
    }
}, {
    "id": 98,
    "name": "Krabby",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 105,
        "defense": 90,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 50,
        "total": 295
    }
}, {
    "id": 99,
    "name": "Kingler",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 130,
        "defense": 115,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 75,
        "total": 420
    }
}, {
    "id": 100,
    "name": "Voltorb",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 30,
        "defense": 50,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 100,
        "total": 290
    }
}, {
    "id": 101,
    "name": "Electrode",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 70,
        "specialAttack": 80,
        "specialDefense": 80,
        "speed": 150,
        "total": 430
    }
}, {
    "id": 102,
    "name": "Exeggcute",
    "types": ["Grass", "Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 40,
        "defense": 80,
        "specialAttack": 60,
        "specialDefense": 45,
        "speed": 40,
        "total": 265
    }
}, {
    "id": 103,
    "name": "Exeggutor",
    "types": ["Grass", "Psychic"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 95,
        "defense": 85,
        "specialAttack": 125,
        "specialDefense": 75,
        "speed": 55,
        "total": 435
    }
}, {
    "id": 104,
    "name": "Cubone",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 95,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 35,
        "total": 270
    }
}, {
    "id": 105,
    "name": "Marowak",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 80,
        "defense": 110,
        "specialAttack": 50,
        "specialDefense": 80,
        "speed": 45,
        "total": 365
    }
}, {
    "id": 106,
    "name": "Hitmonlee",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 120,
        "defense": 53,
        "specialAttack": 35,
        "specialDefense": 110,
        "speed": 87,
        "total": 405
    }
}, {
    "id": 107,
    "name": "Hitmonchan",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 105,
        "defense": 79,
        "specialAttack": 35,
        "specialDefense": 110,
        "speed": 76,
        "total": 405
    }
}, {
    "id": 108,
    "name": "Lickitung",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 55,
        "defense": 75,
        "specialAttack": 60,
        "specialDefense": 75,
        "speed": 30,
        "total": 295
    }
}, {
    "id": 109,
    "name": "Koffing",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 65,
        "defense": 95,
        "specialAttack": 60,
        "specialDefense": 45,
        "speed": 35,
        "total": 300
    }
}, {
    "id": 110,
    "name": "Weezing",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 90,
        "defense": 120,
        "specialAttack": 85,
        "specialDefense": 70,
        "speed": 60,
        "total": 425
    }
}, {
    "id": 111,
    "name": "Rhyhorn",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 85,
        "defense": 95,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 25,
        "total": 265
    }
}, {
    "id": 112,
    "name": "Rhydon",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 130,
        "defense": 120,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 40,
        "total": 380
    }
}, {
    "id": 113,
    "name": "Chansey",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 250,
        "attack": 5,
        "defense": 5,
        "specialAttack": 35,
        "specialDefense": 105,
        "speed": 50,
        "total": 200
    }
}, {
    "id": 114,
    "name": "Tangela",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 55,
        "defense": 115,
        "specialAttack": 100,
        "specialDefense": 40,
        "speed": 60,
        "total": 370
    }
}, {
    "id": 115,
    "name": "Kangaskhan",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 95,
        "defense": 80,
        "specialAttack": 40,
        "specialDefense": 80,
        "speed": 90,
        "total": 385
    }
}, {
    "id": 116,
    "name": "Horsea",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 40,
        "defense": 70,
        "specialAttack": 70,
        "specialDefense": 25,
        "speed": 60,
        "total": 265
    }
}, {
    "id": 117,
    "name": "Seadra",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 65,
        "defense": 95,
        "specialAttack": 95,
        "specialDefense": 45,
        "speed": 85,
        "total": 385
    }
}, {
    "id": 118,
    "name": "Goldeen",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 67,
        "defense": 60,
        "specialAttack": 35,
        "specialDefense": 50,
        "speed": 63,
        "total": 275
    }
}, {
    "id": 119,
    "name": "Seaking",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 92,
        "defense": 65,
        "specialAttack": 65,
        "specialDefense": 80,
        "speed": 68,
        "total": 370
    }
}, {
    "id": 120,
    "name": "Staryu",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 45,
        "defense": 55,
        "specialAttack": 70,
        "specialDefense": 55,
        "speed": 85,
        "total": 310
    }
}, {
    "id": 121,
    "name": "Starmie",
    "types": ["Water", "Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 75,
        "defense": 85,
        "specialAttack": 100,
        "specialDefense": 85,
        "speed": 115,
        "total": 460
    }
}, {
    "id": 122,
    "name": "Mr. Mime",
    "types": ["Psychic", "Fairy"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 65,
        "specialAttack": 100,
        "specialDefense": 120,
        "speed": 90,
        "total": 420
    }
}, {
    "id": 123,
    "name": "Scyther",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 110,
        "defense": 80,
        "specialAttack": 55,
        "specialDefense": 80,
        "speed": 105,
        "total": 430
    }
}, {
    "id": 124,
    "name": "Jynx",
    "types": ["Psychic", "Ice"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 50,
        "defense": 35,
        "specialAttack": 115,
        "specialDefense": 95,
        "speed": 95,
        "total": 390
    }
}, {
    "id": 125,
    "name": "Electabuzz",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 83,
        "defense": 57,
        "specialAttack": 95,
        "specialDefense": 85,
        "speed": 105,
        "total": 425
    }
}, {
    "id": 126,
    "name": "Magmar",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 95,
        "defense": 57,
        "specialAttack": 100,
        "specialDefense": 85,
        "speed": 93,
        "total": 430
    }
}, {
    "id": 127,
    "name": "Pinsir",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 125,
        "defense": 100,
        "specialAttack": 55,
        "specialDefense": 70,
        "speed": 85,
        "total": 435
    }
}, {
    "id": 128,
    "name": "Tauros",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 100,
        "defense": 95,
        "specialAttack": 40,
        "specialDefense": 70,
        "speed": 110,
        "total": 415
    }
}, {
    "id": 129,
    "name": "Magikarp",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 20,
        "attack": 10,
        "defense": 55,
        "specialAttack": 15,
        "specialDefense": 20,
        "speed": 80,
        "total": 180
    }
}, {
    "id": 130,
    "name": "Gyarados",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 125,
        "defense": 79,
        "specialAttack": 60,
        "specialDefense": 100,
        "speed": 81,
        "total": 445
    }
}, {
    "id": 131,
    "name": "Lapras",
    "types": ["Water", "Ice"],
    "baseStatistics": {
        "hitPoints": 130,
        "attack": 85,
        "defense": 80,
        "specialAttack": 85,
        "specialDefense": 95,
        "speed": 60,
        "total": 405
    }
}, {
    "id": 132,
    "name": "Ditto",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 48,
        "attack": 48,
        "defense": 48,
        "specialAttack": 48,
        "specialDefense": 48,
        "speed": 48,
        "total": 240
    }
}, {
    "id": 133,
    "name": "Eevee",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 55,
        "defense": 50,
        "specialAttack": 45,
        "specialDefense": 65,
        "speed": 55,
        "total": 270
    }
}, {
    "id": 134,
    "name": "Vaporeon",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 130,
        "attack": 65,
        "defense": 60,
        "specialAttack": 110,
        "specialDefense": 95,
        "speed": 65,
        "total": 395
    }
}, {
    "id": 135,
    "name": "Jolteon",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 65,
        "defense": 60,
        "specialAttack": 110,
        "specialDefense": 95,
        "speed": 130,
        "total": 460
    }
}, {
    "id": 136,
    "name": "Flareon",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 130,
        "defense": 60,
        "specialAttack": 95,
        "specialDefense": 110,
        "speed": 65,
        "total": 460
    }
}, {
    "id": 137,
    "name": "Porygon",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 60,
        "defense": 70,
        "specialAttack": 85,
        "specialDefense": 75,
        "speed": 40,
        "total": 330
    }
}, {
    "id": 138,
    "name": "Omanyte",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 40,
        "defense": 100,
        "specialAttack": 90,
        "specialDefense": 55,
        "speed": 35,
        "total": 320
    }
}, {
    "id": 139,
    "name": "Omastar",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 60,
        "defense": 125,
        "specialAttack": 115,
        "specialDefense": 70,
        "speed": 55,
        "total": 425
    }
}, {
    "id": 140,
    "name": "Kabuto",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 80,
        "defense": 90,
        "specialAttack": 55,
        "specialDefense": 45,
        "speed": 55,
        "total": 325
    }
}, {
    "id": 141,
    "name": "Kabutops",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 115,
        "defense": 105,
        "specialAttack": 65,
        "specialDefense": 70,
        "speed": 80,
        "total": 435
    }
}, {
    "id": 142,
    "name": "Aerodactyl",
    "types": ["Flying", "Rock"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 105,
        "defense": 65,
        "specialAttack": 60,
        "specialDefense": 75,
        "speed": 130,
        "total": 435
    }
}, {
    "id": 143,
    "name": "Snorlax",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 160,
        "attack": 110,
        "defense": 65,
        "specialAttack": 65,
        "specialDefense": 110,
        "speed": 30,
        "total": 380
    }
}, {
    "id": 144,
    "name": "Articuno",
    "types": ["Flying", "Ice"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 85,
        "defense": 100,
        "specialAttack": 95,
        "specialDefense": 125,
        "speed": 85,
        "total": 490
    }
}, {
    "id": 145,
    "name": "Zapdos",
    "types": ["Flying", "Electric"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 90,
        "defense": 85,
        "specialAttack": 125,
        "specialDefense": 90,
        "speed": 100,
        "total": 490
    }
}, {
    "id": 146,
    "name": "Moltres",
    "types": ["Flying", "Fire"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 100,
        "defense": 90,
        "specialAttack": 125,
        "specialDefense": 85,
        "speed": 90,
        "total": 490
    }
}, {
    "id": 147,
    "name": "Dratini",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 41,
        "attack": 64,
        "defense": 45,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 50,
        "total": 259
    }
}, {
    "id": 148,
    "name": "Dragonair",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 61,
        "attack": 84,
        "defense": 65,
        "specialAttack": 70,
        "specialDefense": 70,
        "speed": 70,
        "total": 359
    }
}, {
    "id": 149,
    "name": "Dragonite",
    "types": ["Flying", "Dragon"],
    "baseStatistics": {
        "hitPoints": 91,
        "attack": 134,
        "defense": 95,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 80,
        "total": 509
    }
}, {
    "id": 150,
    "name": "Mewtwo",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 106,
        "attack": 110,
        "defense": 90,
        "specialAttack": 154,
        "specialDefense": 90,
        "speed": 130,
        "total": 574
    }
}, {
    "id": 151,
    "name": "Mew",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 500
    }
}, {
    "id": 152,
    "name": "Chikorita",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 49,
        "defense": 65,
        "specialAttack": 49,
        "specialDefense": 65,
        "speed": 45,
        "total": 273
    }
}, {
    "id": 153,
    "name": "Bayleef",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 62,
        "defense": 80,
        "specialAttack": 63,
        "specialDefense": 80,
        "speed": 60,
        "total": 345
    }
}, {
    "id": 154,
    "name": "Meganium",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 82,
        "defense": 100,
        "specialAttack": 83,
        "specialDefense": 100,
        "speed": 80,
        "total": 445
    }
}, {
    "id": 155,
    "name": "Cyndaquil",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 39,
        "attack": 52,
        "defense": 43,
        "specialAttack": 60,
        "specialDefense": 50,
        "speed": 65,
        "total": 270
    }
}, {
    "id": 156,
    "name": "Quilava",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 58,
        "attack": 64,
        "defense": 58,
        "specialAttack": 80,
        "specialDefense": 65,
        "speed": 80,
        "total": 347
    }
}, {
    "id": 157,
    "name": "Typhlosion",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 84,
        "defense": 78,
        "specialAttack": 109,
        "specialDefense": 85,
        "speed": 100,
        "total": 456
    }
}, {
    "id": 158,
    "name": "Totodile",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 65,
        "defense": 64,
        "specialAttack": 44,
        "specialDefense": 48,
        "speed": 43,
        "total": 264
    }
}, {
    "id": 159,
    "name": "Croconaw",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 80,
        "defense": 80,
        "specialAttack": 59,
        "specialDefense": 63,
        "speed": 58,
        "total": 340
    }
}, {
    "id": 160,
    "name": "Feraligatr",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 105,
        "defense": 100,
        "specialAttack": 79,
        "specialDefense": 83,
        "speed": 78,
        "total": 445
    }
}, {
    "id": 161,
    "name": "Sentret",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 46,
        "defense": 34,
        "specialAttack": 35,
        "specialDefense": 45,
        "speed": 20,
        "total": 180
    }
}, {
    "id": 162,
    "name": "Furret",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 76,
        "defense": 64,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 90,
        "total": 330
    }
}, {
    "id": 163,
    "name": "Hoothoot",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 30,
        "defense": 30,
        "specialAttack": 36,
        "specialDefense": 56,
        "speed": 50,
        "total": 202
    }
}, {
    "id": 164,
    "name": "Noctowl",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 50,
        "defense": 50,
        "specialAttack": 86,
        "specialDefense": 96,
        "speed": 70,
        "total": 352
    }
}, {
    "id": 165,
    "name": "Ledyba",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 20,
        "defense": 30,
        "specialAttack": 40,
        "specialDefense": 80,
        "speed": 55,
        "total": 225
    }
}, {
    "id": 166,
    "name": "Ledian",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 35,
        "defense": 50,
        "specialAttack": 55,
        "specialDefense": 110,
        "speed": 85,
        "total": 335
    }
}, {
    "id": 167,
    "name": "Spinarak",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 60,
        "defense": 40,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 30,
        "total": 210
    }
}, {
    "id": 168,
    "name": "Ariados",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 90,
        "defense": 70,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 40,
        "total": 330
    }
}, {
    "id": 169,
    "name": "Crobat",
    "types": ["Flying", "Poison"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 90,
        "defense": 80,
        "specialAttack": 70,
        "specialDefense": 80,
        "speed": 130,
        "total": 450
    }
}, {
    "id": 170,
    "name": "Chinchou",
    "types": ["Water", "Electric"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 38,
        "defense": 38,
        "specialAttack": 56,
        "specialDefense": 56,
        "speed": 67,
        "total": 255
    }
}, {
    "id": 171,
    "name": "Lanturn",
    "types": ["Water", "Electric"],
    "baseStatistics": {
        "hitPoints": 125,
        "attack": 58,
        "defense": 58,
        "specialAttack": 76,
        "specialDefense": 76,
        "speed": 67,
        "total": 335
    }
}, {
    "id": 172,
    "name": "Pichu",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 20,
        "attack": 40,
        "defense": 15,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 60,
        "total": 185
    }
}, {
    "id": 173,
    "name": "Cleffa",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 25,
        "defense": 28,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 15,
        "total": 168
    }
}, {
    "id": 174,
    "name": "Igglybuff",
    "types": ["Normal", "Fairy"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 30,
        "defense": 15,
        "specialAttack": 40,
        "specialDefense": 20,
        "speed": 15,
        "total": 120
    }
}, {
    "id": 175,
    "name": "Togepi",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 20,
        "defense": 65,
        "specialAttack": 40,
        "specialDefense": 65,
        "speed": 20,
        "total": 210
    }
}, {
    "id": 176,
    "name": "Togetic",
    "types": ["Flying", "Fairy"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 40,
        "defense": 85,
        "specialAttack": 80,
        "specialDefense": 105,
        "speed": 40,
        "total": 350
    }
}, {
    "id": 177,
    "name": "Natu",
    "types": ["Flying", "Psychic"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 50,
        "defense": 45,
        "specialAttack": 70,
        "specialDefense": 45,
        "speed": 70,
        "total": 280
    }
}, {
    "id": 178,
    "name": "Xatu",
    "types": ["Flying", "Psychic"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 75,
        "defense": 70,
        "specialAttack": 95,
        "specialDefense": 70,
        "speed": 95,
        "total": 405
    }
}, {
    "id": 179,
    "name": "Mareep",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 40,
        "defense": 40,
        "specialAttack": 65,
        "specialDefense": 45,
        "speed": 35,
        "total": 225
    }
}, {
    "id": 180,
    "name": "Flaaffy",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 55,
        "defense": 55,
        "specialAttack": 80,
        "specialDefense": 60,
        "speed": 45,
        "total": 295
    }
}, {
    "id": 181,
    "name": "Ampharos",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 75,
        "defense": 85,
        "specialAttack": 115,
        "specialDefense": 90,
        "speed": 55,
        "total": 420
    }
}, {
    "id": 182,
    "name": "Bellossom",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 80,
        "defense": 95,
        "specialAttack": 90,
        "specialDefense": 100,
        "speed": 50,
        "total": 415
    }
}, {
    "id": 183,
    "name": "Marill",
    "types": ["Water", "Fairy"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 20,
        "defense": 50,
        "specialAttack": 20,
        "specialDefense": 50,
        "speed": 40,
        "total": 180
    }
}, {
    "id": 184,
    "name": "Azumarill",
    "types": ["Water", "Fairy"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 50,
        "defense": 80,
        "specialAttack": 60,
        "specialDefense": 80,
        "speed": 50,
        "total": 320
    }
}, {
    "id": 185,
    "name": "Sudowoodo",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 100,
        "defense": 115,
        "specialAttack": 30,
        "specialDefense": 65,
        "speed": 30,
        "total": 340
    }
}, {
    "id": 186,
    "name": "Politoed",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 75,
        "defense": 75,
        "specialAttack": 90,
        "specialDefense": 100,
        "speed": 70,
        "total": 410
    }
}, {
    "id": 187,
    "name": "Hoppip",
    "types": ["Flying", "Grass"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 35,
        "defense": 40,
        "specialAttack": 35,
        "specialDefense": 55,
        "speed": 50,
        "total": 215
    }
}, {
    "id": 188,
    "name": "Skiploom",
    "types": ["Flying", "Grass"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 45,
        "defense": 50,
        "specialAttack": 45,
        "specialDefense": 65,
        "speed": 80,
        "total": 285
    }
}, {
    "id": 189,
    "name": "Jumpluff",
    "types": ["Flying", "Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 55,
        "defense": 70,
        "specialAttack": 55,
        "specialDefense": 95,
        "speed": 110,
        "total": 385
    }
}, {
    "id": 190,
    "name": "Aipom",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 70,
        "defense": 55,
        "specialAttack": 40,
        "specialDefense": 55,
        "speed": 85,
        "total": 305
    }
}, {
    "id": 191,
    "name": "Sunkern",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 30,
        "defense": 30,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 30,
        "total": 150
    }
}, {
    "id": 192,
    "name": "Sunflora",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 75,
        "defense": 55,
        "specialAttack": 105,
        "specialDefense": 85,
        "speed": 30,
        "total": 350
    }
}, {
    "id": 193,
    "name": "Yanma",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 65,
        "defense": 45,
        "specialAttack": 75,
        "specialDefense": 45,
        "speed": 95,
        "total": 325
    }
}, {
    "id": 194,
    "name": "Wooper",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 45,
        "defense": 45,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 15,
        "total": 155
    }
}, {
    "id": 195,
    "name": "Quagsire",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 85,
        "defense": 85,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 35,
        "total": 335
    }
}, {
    "id": 196,
    "name": "Espeon",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 65,
        "defense": 60,
        "specialAttack": 130,
        "specialDefense": 95,
        "speed": 110,
        "total": 460
    }
}, {
    "id": 197,
    "name": "Umbreon",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 65,
        "defense": 110,
        "specialAttack": 60,
        "specialDefense": 130,
        "speed": 65,
        "total": 430
    }
}, {
    "id": 198,
    "name": "Murkrow",
    "types": ["Flying", "Dark"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 85,
        "defense": 42,
        "specialAttack": 85,
        "specialDefense": 42,
        "speed": 91,
        "total": 345
    }
}, {
    "id": 199,
    "name": "Slowking",
    "types": ["Water", "Psychic"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 75,
        "defense": 80,
        "specialAttack": 100,
        "specialDefense": 110,
        "speed": 30,
        "total": 395
    }
}, {
    "id": 200,
    "name": "Misdreavus",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 60,
        "specialAttack": 85,
        "specialDefense": 85,
        "speed": 85,
        "total": 375
    }
}, {
    "id": 201,
    "name": "Unown",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 48,
        "attack": 72,
        "defense": 48,
        "specialAttack": 72,
        "specialDefense": 48,
        "speed": 48,
        "total": 288
    }
}, {
    "id": 202,
    "name": "Wobbuffet",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 190,
        "attack": 33,
        "defense": 58,
        "specialAttack": 33,
        "specialDefense": 58,
        "speed": 33,
        "total": 215
    }
}, {
    "id": 203,
    "name": "Girafarig",
    "types": ["Normal", "Psychic"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 80,
        "defense": 65,
        "specialAttack": 90,
        "specialDefense": 65,
        "speed": 85,
        "total": 385
    }
}, {
    "id": 204,
    "name": "Pineco",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 65,
        "defense": 90,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 15,
        "total": 240
    }
}, {
    "id": 205,
    "name": "Forretress",
    "types": ["Bug", "Steel"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 90,
        "defense": 140,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 40,
        "total": 390
    }
}, {
    "id": 206,
    "name": "Dunsparce",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 70,
        "defense": 70,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 45,
        "total": 315
    }
}, {
    "id": 207,
    "name": "Gligar",
    "types": ["Flying", "Ground"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 75,
        "defense": 105,
        "specialAttack": 35,
        "specialDefense": 65,
        "speed": 85,
        "total": 365
    }
}, {
    "id": 208,
    "name": "Steelix",
    "types": ["Ground", "Steel"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 85,
        "defense": 200,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 30,
        "total": 435
    }
}, {
    "id": 209,
    "name": "Snubbull",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 80,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 30,
        "total": 240
    }
}, {
    "id": 210,
    "name": "Granbull",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 120,
        "defense": 75,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 45,
        "total": 360
    }
}, {
    "id": 211,
    "name": "Qwilfish",
    "types": ["Poison", "Water"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 95,
        "defense": 85,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 85,
        "total": 375
    }
}, {
    "id": 212,
    "name": "Scizor",
    "types": ["Bug", "Steel"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 130,
        "defense": 100,
        "specialAttack": 55,
        "specialDefense": 80,
        "speed": 65,
        "total": 430
    }
}, {
    "id": 213,
    "name": "Shuckle",
    "types": ["Rock", "Bug"],
    "baseStatistics": {
        "hitPoints": 20,
        "attack": 10,
        "defense": 230,
        "specialAttack": 10,
        "specialDefense": 230,
        "speed": 5,
        "total": 485
    }
}, {
    "id": 214,
    "name": "Heracross",
    "types": ["Fighting", "Bug"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 125,
        "defense": 75,
        "specialAttack": 40,
        "specialDefense": 95,
        "speed": 85,
        "total": 420
    }
}, {
    "id": 215,
    "name": "Sneasel",
    "types": ["Ice", "Dark"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 95,
        "defense": 55,
        "specialAttack": 35,
        "specialDefense": 75,
        "speed": 115,
        "total": 375
    }
}, {
    "id": 216,
    "name": "Teddiursa",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 80,
        "defense": 50,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 40,
        "total": 270
    }
}, {
    "id": 217,
    "name": "Ursaring",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 130,
        "defense": 75,
        "specialAttack": 75,
        "specialDefense": 75,
        "speed": 55,
        "total": 410
    }
}, {
    "id": 218,
    "name": "Slugma",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 40,
        "defense": 40,
        "specialAttack": 70,
        "specialDefense": 40,
        "speed": 20,
        "total": 210
    }
}, {
    "id": 219,
    "name": "Magcargo",
    "types": ["Rock", "Fire"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 120,
        "specialAttack": 90,
        "specialDefense": 80,
        "speed": 30,
        "total": 370
    }
}, {
    "id": 220,
    "name": "Swinub",
    "types": ["Ground", "Ice"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 40,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 50,
        "total": 200
    }
}, {
    "id": 221,
    "name": "Piloswine",
    "types": ["Ground", "Ice"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 80,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 50,
        "total": 350
    }
}, {
    "id": 222,
    "name": "Corsola",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 55,
        "defense": 95,
        "specialAttack": 65,
        "specialDefense": 95,
        "speed": 35,
        "total": 345
    }
}, {
    "id": 223,
    "name": "Remoraid",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 65,
        "defense": 35,
        "specialAttack": 65,
        "specialDefense": 35,
        "speed": 65,
        "total": 265
    }
}, {
    "id": 224,
    "name": "Octillery",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 105,
        "defense": 75,
        "specialAttack": 105,
        "specialDefense": 75,
        "speed": 45,
        "total": 405
    }
}, {
    "id": 225,
    "name": "Delibird",
    "types": ["Flying", "Ice"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 55,
        "defense": 45,
        "specialAttack": 65,
        "specialDefense": 45,
        "speed": 75,
        "total": 285
    }
}, {
    "id": 226,
    "name": "Mantine",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 40,
        "defense": 70,
        "specialAttack": 80,
        "specialDefense": 140,
        "speed": 70,
        "total": 400
    }
}, {
    "id": 227,
    "name": "Skarmory",
    "types": ["Flying", "Steel"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 80,
        "defense": 140,
        "specialAttack": 40,
        "specialDefense": 70,
        "speed": 70,
        "total": 400
    }
}, {
    "id": 228,
    "name": "Houndour",
    "types": ["Fire", "Dark"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 60,
        "defense": 30,
        "specialAttack": 80,
        "specialDefense": 50,
        "speed": 65,
        "total": 285
    }
}, {
    "id": 229,
    "name": "Houndoom",
    "types": ["Fire", "Dark"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 90,
        "defense": 50,
        "specialAttack": 110,
        "specialDefense": 80,
        "speed": 95,
        "total": 425
    }
}, {
    "id": 230,
    "name": "Kingdra",
    "types": ["Water", "Dragon"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 95,
        "defense": 95,
        "specialAttack": 95,
        "specialDefense": 95,
        "speed": 85,
        "total": 465
    }
}, {
    "id": 231,
    "name": "Phanpy",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 60,
        "defense": 60,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 40,
        "total": 240
    }
}, {
    "id": 232,
    "name": "Donphan",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 120,
        "defense": 120,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 50,
        "total": 410
    }
}, {
    "id": 233,
    "name": "Porygon2",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 80,
        "defense": 90,
        "specialAttack": 105,
        "specialDefense": 95,
        "speed": 60,
        "total": 430
    }
}, {
    "id": 234,
    "name": "Stantler",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 73,
        "attack": 95,
        "defense": 62,
        "specialAttack": 85,
        "specialDefense": 65,
        "speed": 85,
        "total": 392
    }
}, {
    "id": 235,
    "name": "Smeargle",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 20,
        "defense": 35,
        "specialAttack": 20,
        "specialDefense": 45,
        "speed": 75,
        "total": 195
    }
}, {
    "id": 236,
    "name": "Tyrogue",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 35,
        "defense": 35,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 35,
        "total": 175
    }
}, {
    "id": 237,
    "name": "Hitmontop",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 95,
        "defense": 95,
        "specialAttack": 35,
        "specialDefense": 110,
        "speed": 70,
        "total": 405
    }
}, {
    "id": 238,
    "name": "Smoochum",
    "types": ["Psychic", "Ice"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 30,
        "defense": 15,
        "specialAttack": 85,
        "specialDefense": 65,
        "speed": 65,
        "total": 260
    }
}, {
    "id": 239,
    "name": "Elekid",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 63,
        "defense": 37,
        "specialAttack": 65,
        "specialDefense": 55,
        "speed": 95,
        "total": 315
    }
}, {
    "id": 240,
    "name": "Magby",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 75,
        "defense": 37,
        "specialAttack": 70,
        "specialDefense": 55,
        "speed": 83,
        "total": 320
    }
}, {
    "id": 241,
    "name": "Miltank",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 80,
        "defense": 105,
        "specialAttack": 40,
        "specialDefense": 70,
        "speed": 100,
        "total": 395
    }
}, {
    "id": 242,
    "name": "Blissey",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 255,
        "attack": 10,
        "defense": 10,
        "specialAttack": 75,
        "specialDefense": 135,
        "speed": 55,
        "total": 285
    }
}, {
    "id": 243,
    "name": "Raikou",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 85,
        "defense": 75,
        "specialAttack": 115,
        "specialDefense": 100,
        "speed": 115,
        "total": 490
    }
}, {
    "id": 244,
    "name": "Entei",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 115,
        "attack": 115,
        "defense": 85,
        "specialAttack": 90,
        "specialDefense": 75,
        "speed": 100,
        "total": 465
    }
}, {
    "id": 245,
    "name": "Suicune",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 75,
        "defense": 115,
        "specialAttack": 90,
        "specialDefense": 115,
        "speed": 85,
        "total": 480
    }
}, {
    "id": 246,
    "name": "Larvitar",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 64,
        "defense": 50,
        "specialAttack": 45,
        "specialDefense": 50,
        "speed": 41,
        "total": 250
    }
}, {
    "id": 247,
    "name": "Pupitar",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 84,
        "defense": 70,
        "specialAttack": 65,
        "specialDefense": 70,
        "speed": 51,
        "total": 340
    }
}, {
    "id": 248,
    "name": "Tyranitar",
    "types": ["Rock", "Dark"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 134,
        "defense": 110,
        "specialAttack": 95,
        "specialDefense": 100,
        "speed": 61,
        "total": 500
    }
}, {
    "id": 249,
    "name": "Lugia",
    "types": ["Flying", "Psychic"],
    "baseStatistics": {
        "hitPoints": 106,
        "attack": 90,
        "defense": 130,
        "specialAttack": 90,
        "specialDefense": 154,
        "speed": 110,
        "total": 574
    }
}, {
    "id": 250,
    "name": "Ho-Oh",
    "types": ["Flying", "Fire"],
    "baseStatistics": {
        "hitPoints": 106,
        "attack": 130,
        "defense": 90,
        "specialAttack": 110,
        "specialDefense": 154,
        "speed": 90,
        "total": 574
    }
}, {
    "id": 251,
    "name": "Celebi",
    "types": ["Grass", "Psychic"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 500
    }
}, {
    "id": 252,
    "name": "Treecko",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 35,
        "specialAttack": 65,
        "specialDefense": 55,
        "speed": 70,
        "total": 270
    }
}, {
    "id": 253,
    "name": "Grovyle",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 65,
        "defense": 45,
        "specialAttack": 85,
        "specialDefense": 65,
        "speed": 95,
        "total": 355
    }
}, {
    "id": 254,
    "name": "Sceptile",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 85,
        "defense": 65,
        "specialAttack": 105,
        "specialDefense": 85,
        "speed": 120,
        "total": 460
    }
}, {
    "id": 255,
    "name": "Torchic",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 60,
        "defense": 40,
        "specialAttack": 70,
        "specialDefense": 50,
        "speed": 45,
        "total": 265
    }
}, {
    "id": 256,
    "name": "Combusken",
    "types": ["Fighting", "Fire"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 85,
        "defense": 60,
        "specialAttack": 85,
        "specialDefense": 60,
        "speed": 55,
        "total": 345
    }
}, {
    "id": 257,
    "name": "Blaziken",
    "types": ["Fighting", "Fire"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 120,
        "defense": 70,
        "specialAttack": 110,
        "specialDefense": 70,
        "speed": 80,
        "total": 450
    }
}, {
    "id": 258,
    "name": "Mudkip",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 70,
        "defense": 50,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 40,
        "total": 260
    }
}, {
    "id": 259,
    "name": "Marshtomp",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 85,
        "defense": 70,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 50,
        "total": 335
    }
}, {
    "id": 260,
    "name": "Swampert",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 110,
        "defense": 90,
        "specialAttack": 85,
        "specialDefense": 90,
        "speed": 60,
        "total": 435
    }
}, {
    "id": 261,
    "name": "Poochyena",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 55,
        "defense": 35,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 35,
        "total": 185
    }
}, {
    "id": 262,
    "name": "Mightyena",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 90,
        "defense": 70,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 70,
        "total": 350
    }
}, {
    "id": 263,
    "name": "Zigzagoon",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 30,
        "defense": 41,
        "specialAttack": 30,
        "specialDefense": 41,
        "speed": 60,
        "total": 202
    }
}, {
    "id": 264,
    "name": "Linoone",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 70,
        "defense": 61,
        "specialAttack": 50,
        "specialDefense": 61,
        "speed": 100,
        "total": 342
    }
}, {
    "id": 265,
    "name": "Wurmple",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 45,
        "defense": 35,
        "specialAttack": 20,
        "specialDefense": 30,
        "speed": 20,
        "total": 150
    }
}, {
    "id": 266,
    "name": "Silcoon",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 35,
        "defense": 55,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 15,
        "total": 155
    }
}, {
    "id": 267,
    "name": "Beautifly",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 70,
        "defense": 50,
        "specialAttack": 100,
        "specialDefense": 50,
        "speed": 65,
        "total": 335
    }
}, {
    "id": 268,
    "name": "Cascoon",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 35,
        "defense": 55,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 15,
        "total": 155
    }
}, {
    "id": 269,
    "name": "Dustox",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 70,
        "specialAttack": 50,
        "specialDefense": 90,
        "speed": 65,
        "total": 325
    }
}, {
    "id": 270,
    "name": "Lotad",
    "types": ["Water", "Grass"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 30,
        "defense": 30,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 30,
        "total": 180
    }
}, {
    "id": 271,
    "name": "Lombre",
    "types": ["Water", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 50,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 50,
        "total": 280
    }
}, {
    "id": 272,
    "name": "Ludicolo",
    "types": ["Water", "Grass"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 70,
        "defense": 70,
        "specialAttack": 90,
        "specialDefense": 100,
        "speed": 70,
        "total": 400
    }
}, {
    "id": 273,
    "name": "Seedot",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 40,
        "defense": 50,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 30,
        "total": 180
    }
}, {
    "id": 274,
    "name": "Nuzleaf",
    "types": ["Grass", "Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 70,
        "defense": 40,
        "specialAttack": 60,
        "specialDefense": 40,
        "speed": 60,
        "total": 270
    }
}, {
    "id": 275,
    "name": "Shiftry",
    "types": ["Grass", "Dark"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 100,
        "defense": 60,
        "specialAttack": 90,
        "specialDefense": 60,
        "speed": 80,
        "total": 390
    }
}, {
    "id": 276,
    "name": "Taillow",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 55,
        "defense": 30,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 85,
        "total": 230
    }
}, {
    "id": 277,
    "name": "Swellow",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 85,
        "defense": 60,
        "specialAttack": 75,
        "specialDefense": 50,
        "speed": 125,
        "total": 395
    }
}, {
    "id": 278,
    "name": "Wingull",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 30,
        "defense": 30,
        "specialAttack": 55,
        "specialDefense": 30,
        "speed": 85,
        "total": 230
    }
}, {
    "id": 279,
    "name": "Pelipper",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 100,
        "specialAttack": 95,
        "specialDefense": 70,
        "speed": 65,
        "total": 380
    }
}, {
    "id": 280,
    "name": "Ralts",
    "types": ["Psychic", "Fairy"],
    "baseStatistics": {
        "hitPoints": 28,
        "attack": 25,
        "defense": 25,
        "specialAttack": 45,
        "specialDefense": 35,
        "speed": 40,
        "total": 170
    }
}, {
    "id": 281,
    "name": "Kirlia",
    "types": ["Psychic", "Fairy"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 35,
        "defense": 35,
        "specialAttack": 65,
        "specialDefense": 55,
        "speed": 50,
        "total": 240
    }
}, {
    "id": 282,
    "name": "Gardevoir",
    "types": ["Psychic", "Fairy"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 65,
        "defense": 65,
        "specialAttack": 125,
        "specialDefense": 115,
        "speed": 80,
        "total": 450
    }
}, {
    "id": 283,
    "name": "Surskit",
    "types": ["Bug", "Water"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 30,
        "defense": 32,
        "specialAttack": 50,
        "specialDefense": 52,
        "speed": 65,
        "total": 229
    }
}, {
    "id": 284,
    "name": "Masquerain",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 60,
        "defense": 62,
        "specialAttack": 100,
        "specialDefense": 82,
        "speed": 80,
        "total": 384
    }
}, {
    "id": 285,
    "name": "Shroomish",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 40,
        "defense": 60,
        "specialAttack": 40,
        "specialDefense": 60,
        "speed": 35,
        "total": 235
    }
}, {
    "id": 286,
    "name": "Breloom",
    "types": ["Fighting", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 130,
        "defense": 80,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 70,
        "total": 400
    }
}, {
    "id": 287,
    "name": "Slakoth",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 60,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 30,
        "total": 220
    }
}, {
    "id": 288,
    "name": "Vigoroth",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 80,
        "defense": 80,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 90,
        "total": 360
    }
}, {
    "id": 289,
    "name": "Slaking",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 150,
        "attack": 160,
        "defense": 100,
        "specialAttack": 95,
        "specialDefense": 65,
        "speed": 100,
        "total": 520
    }
}, {
    "id": 290,
    "name": "Nincada",
    "types": ["Ground", "Bug"],
    "baseStatistics": {
        "hitPoints": 31,
        "attack": 45,
        "defense": 90,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 40,
        "total": 235
    }
}, {
    "id": 291,
    "name": "Ninjask",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 61,
        "attack": 90,
        "defense": 45,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 160,
        "total": 395
    }
}, {
    "id": 292,
    "name": "Shedinja",
    "types": ["Bug", "Ghost"],
    "baseStatistics": {
        "hitPoints": 1,
        "attack": 90,
        "defense": 45,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 40,
        "total": 235
    }
}, {
    "id": 293,
    "name": "Whismur",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 64,
        "attack": 51,
        "defense": 23,
        "specialAttack": 51,
        "specialDefense": 23,
        "speed": 28,
        "total": 176
    }
}, {
    "id": 294,
    "name": "Loudred",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 84,
        "attack": 71,
        "defense": 43,
        "specialAttack": 71,
        "specialDefense": 43,
        "speed": 48,
        "total": 276
    }
}, {
    "id": 295,
    "name": "Exploud",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 104,
        "attack": 91,
        "defense": 63,
        "specialAttack": 91,
        "specialDefense": 73,
        "speed": 68,
        "total": 386
    }
}, {
    "id": 296,
    "name": "Makuhita",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 72,
        "attack": 60,
        "defense": 30,
        "specialAttack": 20,
        "specialDefense": 30,
        "speed": 25,
        "total": 165
    }
}, {
    "id": 297,
    "name": "Hariyama",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 144,
        "attack": 120,
        "defense": 60,
        "specialAttack": 40,
        "specialDefense": 60,
        "speed": 50,
        "total": 330
    }
}, {
    "id": 298,
    "name": "Azurill",
    "types": ["Normal", "Fairy"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 20,
        "defense": 40,
        "specialAttack": 20,
        "specialDefense": 40,
        "speed": 20,
        "total": 140
    }
}, {
    "id": 299,
    "name": "Nosepass",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 45,
        "defense": 135,
        "specialAttack": 45,
        "specialDefense": 90,
        "speed": 30,
        "total": 345
    }
}, {
    "id": 300,
    "name": "Skitty",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 45,
        "defense": 45,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 50,
        "total": 210
    }
}, {
    "id": 301,
    "name": "Delcatty",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 65,
        "defense": 65,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 90,
        "total": 330
    }
}, {
    "id": 302,
    "name": "Sableye",
    "types": ["Ghost", "Dark"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 75,
        "defense": 75,
        "specialAttack": 65,
        "specialDefense": 65,
        "speed": 50,
        "total": 330
    }
}, {
    "id": 303,
    "name": "Mawile",
    "types": ["Steel", "Fairy"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 85,
        "defense": 85,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 50,
        "total": 330
    }
}, {
    "id": 304,
    "name": "Aron",
    "types": ["Rock", "Steel"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 70,
        "defense": 100,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 30,
        "total": 280
    }
}, {
    "id": 305,
    "name": "Lairon",
    "types": ["Rock", "Steel"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 90,
        "defense": 140,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 40,
        "total": 370
    }
}, {
    "id": 306,
    "name": "Aggron",
    "types": ["Rock", "Steel"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 110,
        "defense": 180,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 50,
        "total": 460
    }
}, {
    "id": 307,
    "name": "Meditite",
    "types": ["Fighting", "Psychic"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 40,
        "defense": 55,
        "specialAttack": 40,
        "specialDefense": 55,
        "speed": 60,
        "total": 250
    }
}, {
    "id": 308,
    "name": "Medicham",
    "types": ["Fighting", "Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 75,
        "specialAttack": 60,
        "specialDefense": 75,
        "speed": 80,
        "total": 350
    }
}, {
    "id": 309,
    "name": "Electrike",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 40,
        "specialAttack": 65,
        "specialDefense": 40,
        "speed": 65,
        "total": 255
    }
}, {
    "id": 310,
    "name": "Manectric",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 75,
        "defense": 60,
        "specialAttack": 105,
        "specialDefense": 60,
        "speed": 105,
        "total": 405
    }
}, {
    "id": 311,
    "name": "Plusle",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 40,
        "specialAttack": 85,
        "specialDefense": 75,
        "speed": 95,
        "total": 345
    }
}, {
    "id": 312,
    "name": "Minun",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 40,
        "defense": 50,
        "specialAttack": 75,
        "specialDefense": 85,
        "speed": 95,
        "total": 345
    }
}, {
    "id": 313,
    "name": "Volbeat",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 73,
        "defense": 75,
        "specialAttack": 47,
        "specialDefense": 85,
        "speed": 85,
        "total": 365
    }
}, {
    "id": 314,
    "name": "Illumise",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 47,
        "defense": 75,
        "specialAttack": 73,
        "specialDefense": 85,
        "speed": 85,
        "total": 365
    }
}, {
    "id": 315,
    "name": "Roselia",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 60,
        "defense": 45,
        "specialAttack": 100,
        "specialDefense": 80,
        "speed": 65,
        "total": 350
    }
}, {
    "id": 316,
    "name": "Gulpin",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 43,
        "defense": 53,
        "specialAttack": 43,
        "specialDefense": 53,
        "speed": 40,
        "total": 232
    }
}, {
    "id": 317,
    "name": "Swalot",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 73,
        "defense": 83,
        "specialAttack": 73,
        "specialDefense": 83,
        "speed": 55,
        "total": 367
    }
}, {
    "id": 318,
    "name": "Carvanha",
    "types": ["Water", "Dark"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 90,
        "defense": 20,
        "specialAttack": 65,
        "specialDefense": 20,
        "speed": 65,
        "total": 260
    }
}, {
    "id": 319,
    "name": "Sharpedo",
    "types": ["Water", "Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 120,
        "defense": 40,
        "specialAttack": 95,
        "specialDefense": 40,
        "speed": 95,
        "total": 390
    }
}, {
    "id": 320,
    "name": "Wailmer",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 130,
        "attack": 70,
        "defense": 35,
        "specialAttack": 70,
        "specialDefense": 35,
        "speed": 60,
        "total": 270
    }
}, {
    "id": 321,
    "name": "Wailord",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 170,
        "attack": 90,
        "defense": 45,
        "specialAttack": 90,
        "specialDefense": 45,
        "speed": 60,
        "total": 330
    }
}, {
    "id": 322,
    "name": "Numel",
    "types": ["Ground", "Fire"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 40,
        "specialAttack": 65,
        "specialDefense": 45,
        "speed": 35,
        "total": 245
    }
}, {
    "id": 323,
    "name": "Camerupt",
    "types": ["Ground", "Fire"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 100,
        "defense": 70,
        "specialAttack": 105,
        "specialDefense": 75,
        "speed": 40,
        "total": 390
    }
}, {
    "id": 324,
    "name": "Torkoal",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 85,
        "defense": 140,
        "specialAttack": 85,
        "specialDefense": 70,
        "speed": 20,
        "total": 400
    }
}, {
    "id": 325,
    "name": "Spoink",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 25,
        "defense": 35,
        "specialAttack": 70,
        "specialDefense": 80,
        "speed": 60,
        "total": 270
    }
}, {
    "id": 326,
    "name": "Grumpig",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 45,
        "defense": 65,
        "specialAttack": 90,
        "specialDefense": 110,
        "speed": 80,
        "total": 390
    }
}, {
    "id": 327,
    "name": "Spinda",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 60,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 60,
        "total": 300
    }
}, {
    "id": 328,
    "name": "Trapinch",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 100,
        "defense": 45,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 10,
        "total": 245
    }
}, {
    "id": 329,
    "name": "Vibrava",
    "types": ["Ground", "Dragon"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 70,
        "defense": 50,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 70,
        "total": 290
    }
}, {
    "id": 330,
    "name": "Flygon",
    "types": ["Ground", "Dragon"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 100,
        "defense": 80,
        "specialAttack": 80,
        "specialDefense": 80,
        "speed": 100,
        "total": 440
    }
}, {
    "id": 331,
    "name": "Cacnea",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 85,
        "defense": 40,
        "specialAttack": 85,
        "specialDefense": 40,
        "speed": 35,
        "total": 285
    }
}, {
    "id": 332,
    "name": "Cacturne",
    "types": ["Grass", "Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 115,
        "defense": 60,
        "specialAttack": 115,
        "specialDefense": 60,
        "speed": 55,
        "total": 405
    }
}, {
    "id": 333,
    "name": "Swablu",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 40,
        "defense": 60,
        "specialAttack": 40,
        "specialDefense": 75,
        "speed": 50,
        "total": 265
    }
}, {
    "id": 334,
    "name": "Altaria",
    "types": ["Flying", "Dragon"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 70,
        "defense": 90,
        "specialAttack": 70,
        "specialDefense": 105,
        "speed": 80,
        "total": 415
    }
}, {
    "id": 335,
    "name": "Zangoose",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 73,
        "attack": 115,
        "defense": 60,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 90,
        "total": 385
    }
}, {
    "id": 336,
    "name": "Seviper",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 73,
        "attack": 100,
        "defense": 60,
        "specialAttack": 100,
        "specialDefense": 60,
        "speed": 65,
        "total": 385
    }
}, {
    "id": 337,
    "name": "Lunatone",
    "types": ["Rock", "Psychic"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 55,
        "defense": 65,
        "specialAttack": 95,
        "specialDefense": 85,
        "speed": 70,
        "total": 370
    }
}, {
    "id": 338,
    "name": "Solrock",
    "types": ["Rock", "Psychic"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 95,
        "defense": 85,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 70,
        "total": 370
    }
}, {
    "id": 339,
    "name": "Barboach",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 48,
        "defense": 43,
        "specialAttack": 46,
        "specialDefense": 41,
        "speed": 60,
        "total": 238
    }
}, {
    "id": 340,
    "name": "Whiscash",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 78,
        "defense": 73,
        "specialAttack": 76,
        "specialDefense": 71,
        "speed": 60,
        "total": 358
    }
}, {
    "id": 341,
    "name": "Corphish",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 43,
        "attack": 80,
        "defense": 65,
        "specialAttack": 50,
        "specialDefense": 35,
        "speed": 35,
        "total": 265
    }
}, {
    "id": 342,
    "name": "Crawdaunt",
    "types": ["Water", "Dark"],
    "baseStatistics": {
        "hitPoints": 63,
        "attack": 120,
        "defense": 85,
        "specialAttack": 90,
        "specialDefense": 55,
        "speed": 55,
        "total": 405
    }
}, {
    "id": 343,
    "name": "Baltoy",
    "types": ["Ground", "Psychic"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 40,
        "defense": 55,
        "specialAttack": 40,
        "specialDefense": 70,
        "speed": 55,
        "total": 260
    }
}, {
    "id": 344,
    "name": "Claydol",
    "types": ["Ground", "Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 70,
        "defense": 105,
        "specialAttack": 70,
        "specialDefense": 120,
        "speed": 75,
        "total": 440
    }
}, {
    "id": 345,
    "name": "Lileep",
    "types": ["Rock", "Grass"],
    "baseStatistics": {
        "hitPoints": 66,
        "attack": 41,
        "defense": 77,
        "specialAttack": 61,
        "specialDefense": 87,
        "speed": 23,
        "total": 289
    }
}, {
    "id": 346,
    "name": "Cradily",
    "types": ["Rock", "Grass"],
    "baseStatistics": {
        "hitPoints": 86,
        "attack": 81,
        "defense": 97,
        "specialAttack": 81,
        "specialDefense": 107,
        "speed": 43,
        "total": 409
    }
}, {
    "id": 347,
    "name": "Anorith",
    "types": ["Rock", "Bug"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 95,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 75,
        "total": 310
    }
}, {
    "id": 348,
    "name": "Armaldo",
    "types": ["Rock", "Bug"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 125,
        "defense": 100,
        "specialAttack": 70,
        "specialDefense": 80,
        "speed": 45,
        "total": 420
    }
}, {
    "id": 349,
    "name": "Feebas",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 20,
        "attack": 15,
        "defense": 20,
        "specialAttack": 10,
        "specialDefense": 55,
        "speed": 80,
        "total": 180
    }
}, {
    "id": 350,
    "name": "Milotic",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 60,
        "defense": 79,
        "specialAttack": 100,
        "specialDefense": 125,
        "speed": 81,
        "total": 445
    }
}, {
    "id": 351,
    "name": "Castform",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 70,
        "defense": 70,
        "specialAttack": 70,
        "specialDefense": 70,
        "speed": 70,
        "total": 350
    }
}, {
    "id": 352,
    "name": "Kecleon",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 90,
        "defense": 70,
        "specialAttack": 60,
        "specialDefense": 120,
        "speed": 40,
        "total": 380
    }
}, {
    "id": 353,
    "name": "Shuppet",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 75,
        "defense": 35,
        "specialAttack": 63,
        "specialDefense": 33,
        "speed": 45,
        "total": 251
    }
}, {
    "id": 354,
    "name": "Banette",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 64,
        "attack": 115,
        "defense": 65,
        "specialAttack": 83,
        "specialDefense": 63,
        "speed": 65,
        "total": 391
    }
}, {
    "id": 355,
    "name": "Duskull",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 20,
        "attack": 40,
        "defense": 90,
        "specialAttack": 30,
        "specialDefense": 90,
        "speed": 25,
        "total": 275
    }
}, {
    "id": 356,
    "name": "Dusclops",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 70,
        "defense": 130,
        "specialAttack": 60,
        "specialDefense": 130,
        "speed": 25,
        "total": 415
    }
}, {
    "id": 357,
    "name": "Tropius",
    "types": ["Flying", "Grass"],
    "baseStatistics": {
        "hitPoints": 99,
        "attack": 68,
        "defense": 83,
        "specialAttack": 72,
        "specialDefense": 87,
        "speed": 51,
        "total": 361
    }
}, {
    "id": 358,
    "name": "Chimecho",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 50,
        "defense": 80,
        "specialAttack": 95,
        "specialDefense": 90,
        "speed": 65,
        "total": 380
    }
}, {
    "id": 359,
    "name": "Absol",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 130,
        "defense": 60,
        "specialAttack": 75,
        "specialDefense": 60,
        "speed": 75,
        "total": 400
    }
}, {
    "id": 360,
    "name": "Wynaut",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 23,
        "defense": 48,
        "specialAttack": 23,
        "specialDefense": 48,
        "speed": 23,
        "total": 165
    }
}, {
    "id": 361,
    "name": "Snorunt",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 50,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 50,
        "total": 250
    }
}, {
    "id": 362,
    "name": "Glalie",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 80,
        "defense": 80,
        "specialAttack": 80,
        "specialDefense": 80,
        "speed": 80,
        "total": 400
    }
}, {
    "id": 363,
    "name": "Spheal",
    "types": ["Water", "Ice"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 40,
        "defense": 50,
        "specialAttack": 55,
        "specialDefense": 50,
        "speed": 25,
        "total": 220
    }
}, {
    "id": 364,
    "name": "Sealeo",
    "types": ["Water", "Ice"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 60,
        "defense": 70,
        "specialAttack": 75,
        "specialDefense": 70,
        "speed": 45,
        "total": 320
    }
}, {
    "id": 365,
    "name": "Walrein",
    "types": ["Water", "Ice"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 80,
        "defense": 90,
        "specialAttack": 95,
        "specialDefense": 90,
        "speed": 65,
        "total": 420
    }
}, {
    "id": 366,
    "name": "Clamperl",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 64,
        "defense": 85,
        "specialAttack": 74,
        "specialDefense": 55,
        "speed": 32,
        "total": 310
    }
}, {
    "id": 367,
    "name": "Huntail",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 104,
        "defense": 105,
        "specialAttack": 94,
        "specialDefense": 75,
        "speed": 52,
        "total": 430
    }
}, {
    "id": 368,
    "name": "Gorebyss",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 84,
        "defense": 105,
        "specialAttack": 114,
        "specialDefense": 75,
        "speed": 52,
        "total": 430
    }
}, {
    "id": 369,
    "name": "Relicanth",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 90,
        "defense": 130,
        "specialAttack": 45,
        "specialDefense": 65,
        "speed": 55,
        "total": 385
    }
}, {
    "id": 370,
    "name": "Luvdisc",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 43,
        "attack": 30,
        "defense": 55,
        "specialAttack": 40,
        "specialDefense": 65,
        "speed": 97,
        "total": 287
    }
}, {
    "id": 371,
    "name": "Bagon",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 75,
        "defense": 60,
        "specialAttack": 40,
        "specialDefense": 30,
        "speed": 50,
        "total": 255
    }
}, {
    "id": 372,
    "name": "Shelgon",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 95,
        "defense": 100,
        "specialAttack": 60,
        "specialDefense": 50,
        "speed": 50,
        "total": 355
    }
}, {
    "id": 373,
    "name": "Salamence",
    "types": ["Flying", "Dragon"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 135,
        "defense": 80,
        "specialAttack": 110,
        "specialDefense": 80,
        "speed": 100,
        "total": 505
    }
}, {
    "id": 374,
    "name": "Beldum",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 55,
        "defense": 80,
        "specialAttack": 35,
        "specialDefense": 60,
        "speed": 30,
        "total": 260
    }
}, {
    "id": 375,
    "name": "Metang",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 75,
        "defense": 100,
        "specialAttack": 55,
        "specialDefense": 80,
        "speed": 50,
        "total": 360
    }
}, {
    "id": 376,
    "name": "Metagross",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 135,
        "defense": 130,
        "specialAttack": 95,
        "specialDefense": 90,
        "speed": 70,
        "total": 520
    }
}, {
    "id": 377,
    "name": "Regirock",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 100,
        "defense": 200,
        "specialAttack": 50,
        "specialDefense": 100,
        "speed": 50,
        "total": 500
    }
}, {
    "id": 378,
    "name": "Regice",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 50,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 200,
        "speed": 50,
        "total": 500
    }
}, {
    "id": 379,
    "name": "Registeel",
    "types": ["Steel"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 75,
        "defense": 150,
        "specialAttack": 75,
        "specialDefense": 150,
        "speed": 50,
        "total": 500
    }
}, {
    "id": 380,
    "name": "Latias",
    "types": ["Psychic", "Dragon"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 80,
        "defense": 90,
        "specialAttack": 110,
        "specialDefense": 130,
        "speed": 110,
        "total": 520
    }
}, {
    "id": 381,
    "name": "Latios",
    "types": ["Psychic", "Dragon"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 90,
        "defense": 80,
        "specialAttack": 130,
        "specialDefense": 110,
        "speed": 110,
        "total": 520
    }
}, {
    "id": 382,
    "name": "Kyogre",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 90,
        "specialAttack": 150,
        "specialDefense": 140,
        "speed": 90,
        "total": 570
    }
}, {
    "id": 383,
    "name": "Groudon",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 150,
        "defense": 140,
        "specialAttack": 100,
        "specialDefense": 90,
        "speed": 90,
        "total": 570
    }
}, {
    "id": 384,
    "name": "Rayquaza",
    "types": ["Flying", "Dragon"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 150,
        "defense": 90,
        "specialAttack": 150,
        "specialDefense": 90,
        "speed": 95,
        "total": 575
    }
}, {
    "id": 385,
    "name": "Jirachi",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 500
    }
}, {
    "id": 386,
    "name": "Deoxys",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 150,
        "defense": 50,
        "specialAttack": 150,
        "specialDefense": 50,
        "speed": 150,
        "total": 550
    }
}, {
    "id": 387,
    "name": "Turtwig",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 68,
        "defense": 64,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 31,
        "total": 263
    }
}, {
    "id": 388,
    "name": "Grotle",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 89,
        "defense": 85,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 36,
        "total": 330
    }
}, {
    "id": 389,
    "name": "Torterra",
    "types": ["Ground", "Grass"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 109,
        "defense": 105,
        "specialAttack": 75,
        "specialDefense": 85,
        "speed": 56,
        "total": 430
    }
}, {
    "id": 390,
    "name": "Chimchar",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 58,
        "defense": 44,
        "specialAttack": 58,
        "specialDefense": 44,
        "speed": 61,
        "total": 265
    }
}, {
    "id": 391,
    "name": "Monferno",
    "types": ["Fighting", "Fire"],
    "baseStatistics": {
        "hitPoints": 64,
        "attack": 78,
        "defense": 52,
        "specialAttack": 78,
        "specialDefense": 52,
        "speed": 81,
        "total": 341
    }
}, {
    "id": 392,
    "name": "Infernape",
    "types": ["Fighting", "Fire"],
    "baseStatistics": {
        "hitPoints": 76,
        "attack": 104,
        "defense": 71,
        "specialAttack": 104,
        "specialDefense": 71,
        "speed": 108,
        "total": 458
    }
}, {
    "id": 393,
    "name": "Piplup",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 53,
        "attack": 51,
        "defense": 53,
        "specialAttack": 61,
        "specialDefense": 56,
        "speed": 40,
        "total": 261
    }
}, {
    "id": 394,
    "name": "Prinplup",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 64,
        "attack": 66,
        "defense": 68,
        "specialAttack": 81,
        "specialDefense": 76,
        "speed": 50,
        "total": 341
    }
}, {
    "id": 395,
    "name": "Empoleon",
    "types": ["Steel", "Water"],
    "baseStatistics": {
        "hitPoints": 84,
        "attack": 86,
        "defense": 88,
        "specialAttack": 111,
        "specialDefense": 101,
        "speed": 60,
        "total": 446
    }
}, {
    "id": 396,
    "name": "Starly",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 55,
        "defense": 30,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 60,
        "total": 205
    }
}, {
    "id": 397,
    "name": "Staravia",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 75,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 80,
        "total": 285
    }
}, {
    "id": 398,
    "name": "Staraptor",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 120,
        "defense": 70,
        "specialAttack": 50,
        "specialDefense": 60,
        "speed": 100,
        "total": 400
    }
}, {
    "id": 399,
    "name": "Bidoof",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 59,
        "attack": 45,
        "defense": 40,
        "specialAttack": 35,
        "specialDefense": 40,
        "speed": 31,
        "total": 191
    }
}, {
    "id": 400,
    "name": "Bibarel",
    "types": ["Normal", "Water"],
    "baseStatistics": {
        "hitPoints": 79,
        "attack": 85,
        "defense": 60,
        "specialAttack": 55,
        "specialDefense": 60,
        "speed": 71,
        "total": 331
    }
}, {
    "id": 401,
    "name": "Kricketot",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 37,
        "attack": 25,
        "defense": 41,
        "specialAttack": 25,
        "specialDefense": 41,
        "speed": 25,
        "total": 157
    }
}, {
    "id": 402,
    "name": "Kricketune",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 77,
        "attack": 85,
        "defense": 51,
        "specialAttack": 55,
        "specialDefense": 51,
        "speed": 65,
        "total": 307
    }
}, {
    "id": 403,
    "name": "Shinx",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 65,
        "defense": 34,
        "specialAttack": 40,
        "specialDefense": 34,
        "speed": 45,
        "total": 218
    }
}, {
    "id": 404,
    "name": "Luxio",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 85,
        "defense": 49,
        "specialAttack": 60,
        "specialDefense": 49,
        "speed": 60,
        "total": 303
    }
}, {
    "id": 405,
    "name": "Luxray",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 120,
        "defense": 79,
        "specialAttack": 95,
        "specialDefense": 79,
        "speed": 70,
        "total": 443
    }
}, {
    "id": 406,
    "name": "Budew",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 30,
        "defense": 35,
        "specialAttack": 50,
        "specialDefense": 70,
        "speed": 55,
        "total": 240
    }
}, {
    "id": 407,
    "name": "Roserade",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 70,
        "defense": 65,
        "specialAttack": 125,
        "specialDefense": 105,
        "speed": 90,
        "total": 455
    }
}, {
    "id": 408,
    "name": "Cranidos",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 67,
        "attack": 125,
        "defense": 40,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 58,
        "total": 283
    }
}, {
    "id": 409,
    "name": "Rampardos",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 97,
        "attack": 165,
        "defense": 60,
        "specialAttack": 65,
        "specialDefense": 50,
        "speed": 58,
        "total": 398
    }
}, {
    "id": 410,
    "name": "Shieldon",
    "types": ["Rock", "Steel"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 42,
        "defense": 118,
        "specialAttack": 42,
        "specialDefense": 88,
        "speed": 30,
        "total": 320
    }
}, {
    "id": 411,
    "name": "Bastiodon",
    "types": ["Rock", "Steel"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 52,
        "defense": 168,
        "specialAttack": 47,
        "specialDefense": 138,
        "speed": 30,
        "total": 435
    }
}, {
    "id": 412,
    "name": "Burmy",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 29,
        "defense": 45,
        "specialAttack": 29,
        "specialDefense": 45,
        "speed": 36,
        "total": 184
    }
}, {
    "id": 413,
    "name": "Wormadam",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 59,
        "defense": 85,
        "specialAttack": 79,
        "specialDefense": 105,
        "speed": 36,
        "total": 364
    }
}, {
    "id": 414,
    "name": "Mothim",
    "types": ["Ground", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 94,
        "defense": 50,
        "specialAttack": 94,
        "specialDefense": 50,
        "speed": 66,
        "total": 354
    }
}, {
    "id": 415,
    "name": "Combee",
    "types": ["Bug", "Steel"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 30,
        "defense": 42,
        "specialAttack": 30,
        "specialDefense": 42,
        "speed": 70,
        "total": 214
    }
}, {
    "id": 416,
    "name": "Vespiquen",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 80,
        "defense": 102,
        "specialAttack": 80,
        "specialDefense": 102,
        "speed": 40,
        "total": 404
    }
}, {
    "id": 417,
    "name": "Pachirisu",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 45,
        "defense": 70,
        "specialAttack": 45,
        "specialDefense": 90,
        "speed": 95,
        "total": 345
    }
}, {
    "id": 418,
    "name": "Buizel",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 65,
        "defense": 35,
        "specialAttack": 60,
        "specialDefense": 30,
        "speed": 85,
        "total": 275
    }
}, {
    "id": 419,
    "name": "Floatzel",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 105,
        "defense": 55,
        "specialAttack": 85,
        "specialDefense": 50,
        "speed": 115,
        "total": 410
    }
}, {
    "id": 420,
    "name": "Cherubi",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 35,
        "defense": 45,
        "specialAttack": 62,
        "specialDefense": 53,
        "speed": 35,
        "total": 230
    }
}, {
    "id": 421,
    "name": "Cherrim",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 60,
        "defense": 70,
        "specialAttack": 87,
        "specialDefense": 78,
        "speed": 85,
        "total": 380
    }
}, {
    "id": 422,
    "name": "Shellos",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 76,
        "attack": 48,
        "defense": 48,
        "specialAttack": 57,
        "specialDefense": 62,
        "speed": 34,
        "total": 249
    }
}, {
    "id": 423,
    "name": "Gastrodon",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 111,
        "attack": 83,
        "defense": 68,
        "specialAttack": 92,
        "specialDefense": 82,
        "speed": 39,
        "total": 364
    }
}, {
    "id": 424,
    "name": "Ambipom",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 100,
        "defense": 66,
        "specialAttack": 60,
        "specialDefense": 66,
        "speed": 115,
        "total": 407
    }
}, {
    "id": 425,
    "name": "Drifloon",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 50,
        "defense": 34,
        "specialAttack": 60,
        "specialDefense": 44,
        "speed": 70,
        "total": 258
    }
}, {
    "id": 426,
    "name": "Drifblim",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 150,
        "attack": 80,
        "defense": 44,
        "specialAttack": 90,
        "specialDefense": 54,
        "speed": 80,
        "total": 348
    }
}, {
    "id": 427,
    "name": "Buneary",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 66,
        "defense": 44,
        "specialAttack": 44,
        "specialDefense": 56,
        "speed": 85,
        "total": 295
    }
}, {
    "id": 428,
    "name": "Lopunny",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 76,
        "defense": 84,
        "specialAttack": 54,
        "specialDefense": 96,
        "speed": 105,
        "total": 415
    }
}, {
    "id": 429,
    "name": "Mismagius",
    "types": ["Flying", "Ghost"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 60,
        "specialAttack": 105,
        "specialDefense": 105,
        "speed": 105,
        "total": 435
    }
}, {
    "id": 430,
    "name": "Honchkrow",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 125,
        "defense": 52,
        "specialAttack": 105,
        "specialDefense": 52,
        "speed": 71,
        "total": 405
    }
}, {
    "id": 431,
    "name": "Glameow",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 49,
        "attack": 55,
        "defense": 42,
        "specialAttack": 42,
        "specialDefense": 37,
        "speed": 85,
        "total": 261
    }
}, {
    "id": 432,
    "name": "Purugly",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 71,
        "attack": 82,
        "defense": 64,
        "specialAttack": 64,
        "specialDefense": 59,
        "speed": 112,
        "total": 381
    }
}, {
    "id": 433,
    "name": "Chingling",
    "types": ["Flying", "Dark"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 30,
        "defense": 50,
        "specialAttack": 65,
        "specialDefense": 50,
        "speed": 45,
        "total": 240
    }
}, {
    "id": 434,
    "name": "Stunky",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 63,
        "attack": 63,
        "defense": 47,
        "specialAttack": 41,
        "specialDefense": 41,
        "speed": 74,
        "total": 266
    }
}, {
    "id": 435,
    "name": "Skuntank",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 103,
        "attack": 93,
        "defense": 67,
        "specialAttack": 71,
        "specialDefense": 61,
        "speed": 84,
        "total": 376
    }
}, {
    "id": 436,
    "name": "Bronzor",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 57,
        "attack": 24,
        "defense": 86,
        "specialAttack": 24,
        "specialDefense": 86,
        "speed": 23,
        "total": 243
    }
}, {
    "id": 437,
    "name": "Bronzong",
    "types": ["Poison", "Dark"],
    "baseStatistics": {
        "hitPoints": 67,
        "attack": 89,
        "defense": 116,
        "specialAttack": 79,
        "specialDefense": 116,
        "speed": 33,
        "total": 433
    }
}, {
    "id": 438,
    "name": "Bonsly",
    "types": ["Poison", "Dark"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 80,
        "defense": 95,
        "specialAttack": 10,
        "specialDefense": 45,
        "speed": 10,
        "total": 240
    }
}, {
    "id": 439,
    "name": "Mime Jr.",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 20,
        "attack": 25,
        "defense": 45,
        "specialAttack": 70,
        "specialDefense": 90,
        "speed": 60,
        "total": 290
    }
}, {
    "id": 440,
    "name": "Happiny",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 5,
        "defense": 5,
        "specialAttack": 15,
        "specialDefense": 65,
        "speed": 30,
        "total": 120
    }
}, {
    "id": 441,
    "name": "Chatot",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 76,
        "attack": 65,
        "defense": 45,
        "specialAttack": 92,
        "specialDefense": 42,
        "speed": 91,
        "total": 335
    }
}, {
    "id": 442,
    "name": "Spiritomb",
    "types": ["Psychic", "Fairy"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 92,
        "defense": 108,
        "specialAttack": 92,
        "specialDefense": 108,
        "speed": 35,
        "total": 435
    }
}, {
    "id": 443,
    "name": "Gible",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 58,
        "attack": 70,
        "defense": 45,
        "specialAttack": 40,
        "specialDefense": 45,
        "speed": 42,
        "total": 242
    }
}, {
    "id": 444,
    "name": "Gabite",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 90,
        "defense": 65,
        "specialAttack": 50,
        "specialDefense": 55,
        "speed": 82,
        "total": 342
    }
}, {
    "id": 445,
    "name": "Garchomp",
    "types": ["Ghost", "Dark"],
    "baseStatistics": {
        "hitPoints": 108,
        "attack": 130,
        "defense": 95,
        "specialAttack": 80,
        "specialDefense": 85,
        "speed": 102,
        "total": 492
    }
}, {
    "id": 446,
    "name": "Munchlax",
    "types": ["Ground", "Dragon"],
    "baseStatistics": {
        "hitPoints": 135,
        "attack": 85,
        "defense": 40,
        "specialAttack": 40,
        "specialDefense": 85,
        "speed": 5,
        "total": 255
    }
}, {
    "id": 447,
    "name": "Riolu",
    "types": ["Ground", "Dragon"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 70,
        "defense": 40,
        "specialAttack": 35,
        "specialDefense": 40,
        "speed": 60,
        "total": 245
    }
}, {
    "id": 448,
    "name": "Lucario",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 110,
        "defense": 70,
        "specialAttack": 115,
        "specialDefense": 70,
        "speed": 90,
        "total": 455
    }
}, {
    "id": 449,
    "name": "Hippopotas",
    "types": ["Fighting", "Steel"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 72,
        "defense": 78,
        "specialAttack": 38,
        "specialDefense": 42,
        "speed": 32,
        "total": 262
    }
}, {
    "id": 450,
    "name": "Hippowdon",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 108,
        "attack": 112,
        "defense": 118,
        "specialAttack": 68,
        "specialDefense": 72,
        "speed": 47,
        "total": 417
    }
}, {
    "id": 451,
    "name": "Skorupi",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 50,
        "defense": 90,
        "specialAttack": 30,
        "specialDefense": 55,
        "speed": 65,
        "total": 290
    }
}, {
    "id": 452,
    "name": "Drapion",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 90,
        "defense": 110,
        "specialAttack": 60,
        "specialDefense": 75,
        "speed": 95,
        "total": 430
    }
}, {
    "id": 453,
    "name": "Croagunk",
    "types": ["Poison", "Dark"],
    "baseStatistics": {
        "hitPoints": 48,
        "attack": 61,
        "defense": 40,
        "specialAttack": 61,
        "specialDefense": 40,
        "speed": 50,
        "total": 252
    }
}, {
    "id": 454,
    "name": "Toxicroak",
    "types": ["Fighting", "Poison"],
    "baseStatistics": {
        "hitPoints": 83,
        "attack": 106,
        "defense": 65,
        "specialAttack": 86,
        "specialDefense": 65,
        "speed": 85,
        "total": 407
    }
}, {
    "id": 455,
    "name": "Carnivine",
    "types": ["Fighting", "Poison"],
    "baseStatistics": {
        "hitPoints": 74,
        "attack": 100,
        "defense": 72,
        "specialAttack": 90,
        "specialDefense": 72,
        "speed": 46,
        "total": 380
    }
}, {
    "id": 456,
    "name": "Finneon",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 49,
        "attack": 49,
        "defense": 56,
        "specialAttack": 49,
        "specialDefense": 61,
        "speed": 66,
        "total": 281
    }
}, {
    "id": 457,
    "name": "Lumineon",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 69,
        "attack": 69,
        "defense": 76,
        "specialAttack": 69,
        "specialDefense": 86,
        "speed": 91,
        "total": 391
    }
}, {
    "id": 458,
    "name": "Mantyke",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 20,
        "defense": 50,
        "specialAttack": 60,
        "specialDefense": 120,
        "speed": 50,
        "total": 300
    }
}, {
    "id": 459,
    "name": "Snover",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 62,
        "defense": 50,
        "specialAttack": 62,
        "specialDefense": 60,
        "speed": 40,
        "total": 274
    }
}, {
    "id": 460,
    "name": "Abomasnow",
    "types": ["Grass", "Ice"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 92,
        "defense": 75,
        "specialAttack": 92,
        "specialDefense": 85,
        "speed": 60,
        "total": 404
    }
}, {
    "id": 461,
    "name": "Weavile",
    "types": ["Ice", "Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 120,
        "defense": 65,
        "specialAttack": 45,
        "specialDefense": 85,
        "speed": 125,
        "total": 440
    }
}, {
    "id": 462,
    "name": "Magnezone",
    "types": ["Steel", "Electric"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 70,
        "defense": 115,
        "specialAttack": 130,
        "specialDefense": 90,
        "speed": 60,
        "total": 465
    }
}, {
    "id": 463,
    "name": "Lickilicky",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 85,
        "defense": 95,
        "specialAttack": 80,
        "specialDefense": 95,
        "speed": 50,
        "total": 405
    }
}, {
    "id": 464,
    "name": "Rhyperior",
    "types": ["Ground", "Rock"],
    "baseStatistics": {
        "hitPoints": 115,
        "attack": 140,
        "defense": 130,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 40,
        "total": 420
    }
}, {
    "id": 465,
    "name": "Tangrowth",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 125,
        "specialAttack": 110,
        "specialDefense": 50,
        "speed": 50,
        "total": 435
    }
}, {
    "id": 466,
    "name": "Electivire",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 123,
        "defense": 67,
        "specialAttack": 95,
        "specialDefense": 85,
        "speed": 95,
        "total": 465
    }
}, {
    "id": 467,
    "name": "Magmortar",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 95,
        "defense": 67,
        "specialAttack": 125,
        "specialDefense": 95,
        "speed": 83,
        "total": 465
    }
}, {
    "id": 468,
    "name": "Togekiss",
    "types": ["Flying", "Fairy"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 50,
        "defense": 95,
        "specialAttack": 120,
        "specialDefense": 115,
        "speed": 80,
        "total": 460
    }
}, {
    "id": 469,
    "name": "Yanmega",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 86,
        "attack": 76,
        "defense": 86,
        "specialAttack": 116,
        "specialDefense": 56,
        "speed": 95,
        "total": 429
    }
}, {
    "id": 470,
    "name": "Leafeon",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 110,
        "defense": 130,
        "specialAttack": 60,
        "specialDefense": 65,
        "speed": 95,
        "total": 460
    }
}, {
    "id": 471,
    "name": "Glaceon",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 60,
        "defense": 110,
        "specialAttack": 130,
        "specialDefense": 95,
        "speed": 65,
        "total": 460
    }
}, {
    "id": 472,
    "name": "Gliscor",
    "types": ["Flying", "Ground"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 95,
        "defense": 125,
        "specialAttack": 45,
        "specialDefense": 75,
        "speed": 95,
        "total": 435
    }
}, {
    "id": 473,
    "name": "Mamoswine",
    "types": ["Ground", "Ice"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 130,
        "defense": 80,
        "specialAttack": 70,
        "specialDefense": 60,
        "speed": 80,
        "total": 420
    }
}, {
    "id": 474,
    "name": "Porygon-Z",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 80,
        "defense": 70,
        "specialAttack": 135,
        "specialDefense": 75,
        "speed": 90,
        "total": 450
    }
}, {
    "id": 475,
    "name": "Gallade",
    "types": ["Fighting", "Psychic"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 125,
        "defense": 65,
        "specialAttack": 65,
        "specialDefense": 115,
        "speed": 80,
        "total": 450
    }
}, {
    "id": 476,
    "name": "Probopass",
    "types": ["Rock", "Steel"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 55,
        "defense": 145,
        "specialAttack": 75,
        "specialDefense": 150,
        "speed": 40,
        "total": 465
    }
}, {
    "id": 477,
    "name": "Dusknoir",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 100,
        "defense": 135,
        "specialAttack": 65,
        "specialDefense": 135,
        "speed": 45,
        "total": 480
    }
}, {
    "id": 478,
    "name": "Froslass",
    "types": ["Ghost", "Ice"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 80,
        "defense": 70,
        "specialAttack": 80,
        "specialDefense": 70,
        "speed": 110,
        "total": 410
    }
}, {
    "id": 479,
    "name": "Rotom",
    "types": ["Ghost", "Electric"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 77,
        "specialAttack": 95,
        "specialDefense": 77,
        "speed": 91,
        "total": 390
    }
}, {
    "id": 480,
    "name": "Uxie",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 75,
        "defense": 130,
        "specialAttack": 75,
        "specialDefense": 130,
        "speed": 95,
        "total": 505
    }
}, {
    "id": 481,
    "name": "Mesprit",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 105,
        "defense": 105,
        "specialAttack": 105,
        "specialDefense": 105,
        "speed": 80,
        "total": 500
    }
}, {
    "id": 482,
    "name": "Azelf",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 125,
        "defense": 70,
        "specialAttack": 125,
        "specialDefense": 70,
        "speed": 115,
        "total": 505
    }
}, {
    "id": 483,
    "name": "Dialga",
    "types": ["Steel", "Dragon"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 120,
        "defense": 120,
        "specialAttack": 150,
        "specialDefense": 100,
        "speed": 90,
        "total": 580
    }
}, {
    "id": 484,
    "name": "Palkia",
    "types": ["Water", "Dragon"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 120,
        "defense": 100,
        "specialAttack": 150,
        "specialDefense": 120,
        "speed": 100,
        "total": 590
    }
}, {
    "id": 485,
    "name": "Heatran",
    "types": ["Steel", "Fire"],
    "baseStatistics": {
        "hitPoints": 91,
        "attack": 90,
        "defense": 106,
        "specialAttack": 130,
        "specialDefense": 106,
        "speed": 77,
        "total": 509
    }
}, {
    "id": 486,
    "name": "Regigigas",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 160,
        "defense": 110,
        "specialAttack": 80,
        "specialDefense": 110,
        "speed": 100,
        "total": 560
    }
}, {
    "id": 487,
    "name": "Giratina",
    "types": ["Ghost", "Dragon"],
    "baseStatistics": {
        "hitPoints": 150,
        "attack": 100,
        "defense": 120,
        "specialAttack": 100,
        "specialDefense": 120,
        "speed": 90,
        "total": 530
    }
}, {
    "id": 488,
    "name": "Cresselia",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 120,
        "attack": 70,
        "defense": 120,
        "specialAttack": 75,
        "specialDefense": 130,
        "speed": 85,
        "total": 480
    }
}, {
    "id": 489,
    "name": "Phione",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 80,
        "defense": 80,
        "specialAttack": 80,
        "specialDefense": 80,
        "speed": 80,
        "total": 400
    }
}, {
    "id": 490,
    "name": "Manaphy",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 500
    }
}, {
    "id": 491,
    "name": "Darkrai",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 90,
        "defense": 90,
        "specialAttack": 135,
        "specialDefense": 90,
        "speed": 125,
        "total": 530
    }
}, {
    "id": 492,
    "name": "Shaymin",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 500
    }
}, {
    "id": 493,
    "name": "Arceus",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 120,
        "attack": 120,
        "defense": 120,
        "specialAttack": 120,
        "specialDefense": 120,
        "speed": 120,
        "total": 600
    }
}, {
    "id": 494,
    "name": "Victini",
    "types": ["Fire", "Psychic"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 100,
        "defense": 100,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 100,
        "total": 500
    }
}, {
    "id": 495,
    "name": "Snivy",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 45,
        "defense": 55,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 63,
        "total": 263
    }
}, {
    "id": 496,
    "name": "Servine",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 75,
        "specialAttack": 60,
        "specialDefense": 75,
        "speed": 83,
        "total": 353
    }
}, {
    "id": 497,
    "name": "Serperior",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 75,
        "defense": 95,
        "specialAttack": 75,
        "specialDefense": 95,
        "speed": 113,
        "total": 453
    }
}, {
    "id": 498,
    "name": "Tepig",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 63,
        "defense": 45,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 45,
        "total": 243
    }
}, {
    "id": 499,
    "name": "Pignite",
    "types": ["Fighting", "Fire"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 93,
        "defense": 55,
        "specialAttack": 70,
        "specialDefense": 55,
        "speed": 55,
        "total": 328
    }
}, {
    "id": 500,
    "name": "Emboar",
    "types": ["Fighting", "Fire"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 123,
        "defense": 65,
        "specialAttack": 100,
        "specialDefense": 65,
        "speed": 65,
        "total": 418
    }
}, {
    "id": 501,
    "name": "Oshawott",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 55,
        "defense": 45,
        "specialAttack": 63,
        "specialDefense": 45,
        "speed": 45,
        "total": 253
    }
}, {
    "id": 502,
    "name": "Dewott",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 75,
        "defense": 60,
        "specialAttack": 83,
        "specialDefense": 60,
        "speed": 60,
        "total": 338
    }
}, {
    "id": 503,
    "name": "Samurott",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 100,
        "defense": 85,
        "specialAttack": 108,
        "specialDefense": 70,
        "speed": 70,
        "total": 433
    }
}, {
    "id": 504,
    "name": "Patrat",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 55,
        "defense": 39,
        "specialAttack": 35,
        "specialDefense": 39,
        "speed": 42,
        "total": 210
    }
}, {
    "id": 505,
    "name": "Watchog",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 85,
        "defense": 69,
        "specialAttack": 60,
        "specialDefense": 69,
        "speed": 77,
        "total": 360
    }
}, {
    "id": 506,
    "name": "Lillipup",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 60,
        "defense": 45,
        "specialAttack": 25,
        "specialDefense": 45,
        "speed": 55,
        "total": 230
    }
}, {
    "id": 507,
    "name": "Herdier",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 80,
        "defense": 65,
        "specialAttack": 35,
        "specialDefense": 65,
        "speed": 60,
        "total": 305
    }
}, {
    "id": 508,
    "name": "Stoutland",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 110,
        "defense": 90,
        "specialAttack": 45,
        "specialDefense": 90,
        "speed": 80,
        "total": 415
    }
}, {
    "id": 509,
    "name": "Purrloin",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 41,
        "attack": 50,
        "defense": 37,
        "specialAttack": 50,
        "specialDefense": 37,
        "speed": 66,
        "total": 240
    }
}, {
    "id": 510,
    "name": "Liepard",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 64,
        "attack": 88,
        "defense": 50,
        "specialAttack": 88,
        "specialDefense": 50,
        "speed": 106,
        "total": 382
    }
}, {
    "id": 511,
    "name": "Pansage",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 53,
        "defense": 48,
        "specialAttack": 53,
        "specialDefense": 48,
        "speed": 64,
        "total": 266
    }
}, {
    "id": 512,
    "name": "Simisage",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 98,
        "defense": 63,
        "specialAttack": 98,
        "specialDefense": 63,
        "speed": 101,
        "total": 423
    }
}, {
    "id": 513,
    "name": "Pansear",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 53,
        "defense": 48,
        "specialAttack": 53,
        "specialDefense": 48,
        "speed": 64,
        "total": 266
    }
}, {
    "id": 514,
    "name": "Simisear",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 98,
        "defense": 63,
        "specialAttack": 98,
        "specialDefense": 63,
        "speed": 101,
        "total": 423
    }
}, {
    "id": 515,
    "name": "Panpour",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 53,
        "defense": 48,
        "specialAttack": 53,
        "specialDefense": 48,
        "speed": 64,
        "total": 266
    }
}, {
    "id": 516,
    "name": "Simipour",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 98,
        "defense": 63,
        "specialAttack": 98,
        "specialDefense": 63,
        "speed": 101,
        "total": 423
    }
}, {
    "id": 517,
    "name": "Munna",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 76,
        "attack": 25,
        "defense": 45,
        "specialAttack": 67,
        "specialDefense": 55,
        "speed": 24,
        "total": 216
    }
}, {
    "id": 518,
    "name": "Musharna",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 116,
        "attack": 55,
        "defense": 85,
        "specialAttack": 107,
        "specialDefense": 95,
        "speed": 29,
        "total": 371
    }
}, {
    "id": 519,
    "name": "Pidove",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 55,
        "defense": 50,
        "specialAttack": 36,
        "specialDefense": 30,
        "speed": 43,
        "total": 214
    }
}, {
    "id": 520,
    "name": "Tranquill",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 77,
        "defense": 62,
        "specialAttack": 50,
        "specialDefense": 42,
        "speed": 65,
        "total": 296
    }
}, {
    "id": 521,
    "name": "Unfezant",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 115,
        "defense": 80,
        "specialAttack": 65,
        "specialDefense": 55,
        "speed": 93,
        "total": 408
    }
}, {
    "id": 522,
    "name": "Blitzle",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 60,
        "defense": 32,
        "specialAttack": 50,
        "specialDefense": 32,
        "speed": 76,
        "total": 250
    }
}, {
    "id": 523,
    "name": "Zebstrika",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 100,
        "defense": 63,
        "specialAttack": 80,
        "specialDefense": 63,
        "speed": 116,
        "total": 422
    }
}, {
    "id": 524,
    "name": "Roggenrola",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 75,
        "defense": 85,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 15,
        "total": 225
    }
}, {
    "id": 525,
    "name": "Boldore",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 105,
        "defense": 105,
        "specialAttack": 50,
        "specialDefense": 40,
        "speed": 20,
        "total": 320
    }
}, {
    "id": 526,
    "name": "Gigalith",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 135,
        "defense": 130,
        "specialAttack": 60,
        "specialDefense": 80,
        "speed": 25,
        "total": 430
    }
}, {
    "id": 527,
    "name": "Woobat",
    "types": ["Flying", "Psychic"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 45,
        "defense": 43,
        "specialAttack": 55,
        "specialDefense": 43,
        "speed": 72,
        "total": 258
    }
}, {
    "id": 528,
    "name": "Swoobat",
    "types": ["Flying", "Psychic"],
    "baseStatistics": {
        "hitPoints": 67,
        "attack": 57,
        "defense": 55,
        "specialAttack": 77,
        "specialDefense": 55,
        "speed": 114,
        "total": 358
    }
}, {
    "id": 529,
    "name": "Drilbur",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 85,
        "defense": 40,
        "specialAttack": 30,
        "specialDefense": 45,
        "speed": 68,
        "total": 268
    }
}, {
    "id": 530,
    "name": "Excadrill",
    "types": ["Ground", "Steel"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 135,
        "defense": 60,
        "specialAttack": 50,
        "specialDefense": 65,
        "speed": 88,
        "total": 398
    }
}, {
    "id": 531,
    "name": "Audino",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 103,
        "attack": 60,
        "defense": 86,
        "specialAttack": 60,
        "specialDefense": 86,
        "speed": 50,
        "total": 342
    }
}, {
    "id": 532,
    "name": "Timburr",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 80,
        "defense": 55,
        "specialAttack": 25,
        "specialDefense": 35,
        "speed": 35,
        "total": 230
    }
}, {
    "id": 533,
    "name": "Gurdurr",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 105,
        "defense": 85,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 40,
        "total": 320
    }
}, {
    "id": 534,
    "name": "Conkeldurr",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 140,
        "defense": 95,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 45,
        "total": 400
    }
}, {
    "id": 535,
    "name": "Tympole",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 40,
        "specialAttack": 50,
        "specialDefense": 40,
        "speed": 64,
        "total": 244
    }
}, {
    "id": 536,
    "name": "Palpitoad",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 65,
        "defense": 55,
        "specialAttack": 65,
        "specialDefense": 55,
        "speed": 69,
        "total": 309
    }
}, {
    "id": 537,
    "name": "Seismitoad",
    "types": ["Ground", "Water"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 95,
        "defense": 75,
        "specialAttack": 85,
        "specialDefense": 75,
        "speed": 74,
        "total": 404
    }
}, {
    "id": 538,
    "name": "Throh",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 120,
        "attack": 100,
        "defense": 85,
        "specialAttack": 30,
        "specialDefense": 85,
        "speed": 45,
        "total": 345
    }
}, {
    "id": 539,
    "name": "Sawk",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 125,
        "defense": 75,
        "specialAttack": 30,
        "specialDefense": 75,
        "speed": 85,
        "total": 390
    }
}, {
    "id": 540,
    "name": "Sewaddle",
    "types": ["Bug", "Grass"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 53,
        "defense": 70,
        "specialAttack": 40,
        "specialDefense": 60,
        "speed": 42,
        "total": 265
    }
}, {
    "id": 541,
    "name": "Swadloon",
    "types": ["Bug", "Grass"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 63,
        "defense": 90,
        "specialAttack": 50,
        "specialDefense": 80,
        "speed": 42,
        "total": 325
    }
}, {
    "id": 542,
    "name": "Leavanny",
    "types": ["Bug", "Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 103,
        "defense": 80,
        "specialAttack": 70,
        "specialDefense": 80,
        "speed": 92,
        "total": 425
    }
}, {
    "id": 543,
    "name": "Venipede",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 30,
        "attack": 45,
        "defense": 59,
        "specialAttack": 30,
        "specialDefense": 39,
        "speed": 57,
        "total": 230
    }
}, {
    "id": 544,
    "name": "Whirlipede",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 55,
        "defense": 99,
        "specialAttack": 40,
        "specialDefense": 79,
        "speed": 47,
        "total": 320
    }
}, {
    "id": 545,
    "name": "Scolipede",
    "types": ["Poison", "Bug"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 100,
        "defense": 89,
        "specialAttack": 55,
        "specialDefense": 69,
        "speed": 112,
        "total": 425
    }
}, {
    "id": 546,
    "name": "Cottonee",
    "types": ["Grass", "Fairy"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 27,
        "defense": 60,
        "specialAttack": 37,
        "specialDefense": 50,
        "speed": 66,
        "total": 240
    }
}, {
    "id": 547,
    "name": "Whimsicott",
    "types": ["Grass", "Fairy"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 67,
        "defense": 85,
        "specialAttack": 77,
        "specialDefense": 75,
        "speed": 116,
        "total": 420
    }
}, {
    "id": 548,
    "name": "Petilil",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 35,
        "defense": 50,
        "specialAttack": 70,
        "specialDefense": 50,
        "speed": 30,
        "total": 235
    }
}, {
    "id": 549,
    "name": "Lilligant",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 60,
        "defense": 75,
        "specialAttack": 110,
        "specialDefense": 75,
        "speed": 90,
        "total": 410
    }
}, {
    "id": 550,
    "name": "Basculin",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 92,
        "defense": 65,
        "specialAttack": 80,
        "specialDefense": 55,
        "speed": 98,
        "total": 390
    }
}, {
    "id": 551,
    "name": "Sandile",
    "types": ["Ground", "Dark"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 72,
        "defense": 35,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 65,
        "total": 242
    }
}, {
    "id": 552,
    "name": "Krokorok",
    "types": ["Ground", "Dark"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 82,
        "defense": 45,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 74,
        "total": 291
    }
}, {
    "id": 553,
    "name": "Krookodile",
    "types": ["Ground", "Dark"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 117,
        "defense": 80,
        "specialAttack": 65,
        "specialDefense": 70,
        "speed": 92,
        "total": 424
    }
}, {
    "id": 554,
    "name": "Darumaka",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 90,
        "defense": 45,
        "specialAttack": 15,
        "specialDefense": 45,
        "speed": 50,
        "total": 245
    }
}, {
    "id": 555,
    "name": "Darmanitan",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 105,
        "attack": 140,
        "defense": 55,
        "specialAttack": 30,
        "specialDefense": 55,
        "speed": 95,
        "total": 375
    }
}, {
    "id": 556,
    "name": "Maractus",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 86,
        "defense": 67,
        "specialAttack": 106,
        "specialDefense": 67,
        "speed": 60,
        "total": 386
    }
}, {
    "id": 557,
    "name": "Dwebble",
    "types": ["Rock", "Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 65,
        "defense": 85,
        "specialAttack": 35,
        "specialDefense": 35,
        "speed": 55,
        "total": 275
    }
}, {
    "id": 558,
    "name": "Crustle",
    "types": ["Rock", "Bug"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 105,
        "defense": 125,
        "specialAttack": 65,
        "specialDefense": 75,
        "speed": 45,
        "total": 415
    }
}, {
    "id": 559,
    "name": "Scraggy",
    "types": ["Fighting", "Dark"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 75,
        "defense": 70,
        "specialAttack": 35,
        "specialDefense": 70,
        "speed": 48,
        "total": 298
    }
}, {
    "id": 560,
    "name": "Scrafty",
    "types": ["Fighting", "Dark"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 90,
        "defense": 115,
        "specialAttack": 45,
        "specialDefense": 115,
        "speed": 58,
        "total": 423
    }
}, {
    "id": 561,
    "name": "Sigilyph",
    "types": ["Flying", "Psychic"],
    "baseStatistics": {
        "hitPoints": 72,
        "attack": 58,
        "defense": 80,
        "specialAttack": 103,
        "specialDefense": 80,
        "speed": 97,
        "total": 418
    }
}, {
    "id": 562,
    "name": "Yamask",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 30,
        "defense": 85,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 30,
        "total": 265
    }
}, {
    "id": 563,
    "name": "Cofagrigus",
    "types": ["Ghost"],
    "baseStatistics": {
        "hitPoints": 58,
        "attack": 50,
        "defense": 145,
        "specialAttack": 95,
        "specialDefense": 105,
        "speed": 30,
        "total": 425
    }
}, {
    "id": 564,
    "name": "Tirtouga",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 54,
        "attack": 78,
        "defense": 103,
        "specialAttack": 53,
        "specialDefense": 45,
        "speed": 22,
        "total": 301
    }
}, {
    "id": 565,
    "name": "Carracosta",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 74,
        "attack": 108,
        "defense": 133,
        "specialAttack": 83,
        "specialDefense": 65,
        "speed": 32,
        "total": 421
    }
}, {
    "id": 566,
    "name": "Archen",
    "types": ["Flying", "Rock"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 112,
        "defense": 45,
        "specialAttack": 74,
        "specialDefense": 45,
        "speed": 70,
        "total": 346
    }
}, {
    "id": 567,
    "name": "Archeops",
    "types": ["Flying", "Rock"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 140,
        "defense": 65,
        "specialAttack": 112,
        "specialDefense": 65,
        "speed": 110,
        "total": 492
    }
}, {
    "id": 568,
    "name": "Trubbish",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 62,
        "specialAttack": 40,
        "specialDefense": 62,
        "speed": 65,
        "total": 279
    }
}, {
    "id": 569,
    "name": "Garbodor",
    "types": ["Poison"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 95,
        "defense": 82,
        "specialAttack": 60,
        "specialDefense": 82,
        "speed": 75,
        "total": 394
    }
}, {
    "id": 570,
    "name": "Zorua",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 65,
        "defense": 40,
        "specialAttack": 80,
        "specialDefense": 40,
        "speed": 65,
        "total": 290
    }
}, {
    "id": 571,
    "name": "Zoroark",
    "types": ["Dark"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 105,
        "defense": 60,
        "specialAttack": 120,
        "specialDefense": 60,
        "speed": 105,
        "total": 450
    }
}, {
    "id": 572,
    "name": "Minccino",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 50,
        "defense": 40,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 75,
        "total": 245
    }
}, {
    "id": 573,
    "name": "Cinccino",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 95,
        "defense": 60,
        "specialAttack": 65,
        "specialDefense": 60,
        "speed": 115,
        "total": 395
    }
}, {
    "id": 574,
    "name": "Gothita",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 30,
        "defense": 50,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 45,
        "total": 245
    }
}, {
    "id": 575,
    "name": "Gothorita",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 45,
        "defense": 70,
        "specialAttack": 75,
        "specialDefense": 85,
        "speed": 55,
        "total": 330
    }
}, {
    "id": 576,
    "name": "Gothitelle",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 55,
        "defense": 95,
        "specialAttack": 95,
        "specialDefense": 110,
        "speed": 65,
        "total": 420
    }
}, {
    "id": 577,
    "name": "Solosis",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 30,
        "defense": 40,
        "specialAttack": 105,
        "specialDefense": 50,
        "speed": 20,
        "total": 245
    }
}, {
    "id": 578,
    "name": "Duosion",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 40,
        "defense": 50,
        "specialAttack": 125,
        "specialDefense": 60,
        "speed": 30,
        "total": 305
    }
}, {
    "id": 579,
    "name": "Reuniclus",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 65,
        "defense": 75,
        "specialAttack": 125,
        "specialDefense": 85,
        "speed": 30,
        "total": 380
    }
}, {
    "id": 580,
    "name": "Ducklett",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 44,
        "defense": 50,
        "specialAttack": 44,
        "specialDefense": 50,
        "speed": 55,
        "total": 243
    }
}, {
    "id": 581,
    "name": "Swanna",
    "types": ["Flying", "Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 87,
        "defense": 63,
        "specialAttack": 87,
        "specialDefense": 63,
        "speed": 98,
        "total": 398
    }
}, {
    "id": 582,
    "name": "Vanillite",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 36,
        "attack": 50,
        "defense": 50,
        "specialAttack": 65,
        "specialDefense": 60,
        "speed": 44,
        "total": 269
    }
}, {
    "id": 583,
    "name": "Vanillish",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 51,
        "attack": 65,
        "defense": 65,
        "specialAttack": 80,
        "specialDefense": 75,
        "speed": 59,
        "total": 344
    }
}, {
    "id": 584,
    "name": "Vanilluxe",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 71,
        "attack": 95,
        "defense": 85,
        "specialAttack": 110,
        "specialDefense": 95,
        "speed": 79,
        "total": 464
    }
}, {
    "id": 585,
    "name": "Deerling",
    "types": ["Normal", "Grass"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 75,
        "total": 275
    }
}, {
    "id": 586,
    "name": "Sawsbuck",
    "types": ["Normal", "Grass"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 100,
        "defense": 70,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 95,
        "total": 395
    }
}, {
    "id": 587,
    "name": "Emolga",
    "types": ["Flying", "Electric"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 75,
        "defense": 60,
        "specialAttack": 75,
        "specialDefense": 60,
        "speed": 103,
        "total": 373
    }
}, {
    "id": 588,
    "name": "Karrablast",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 75,
        "defense": 45,
        "specialAttack": 40,
        "specialDefense": 45,
        "speed": 60,
        "total": 265
    }
}, {
    "id": 589,
    "name": "Escavalier",
    "types": ["Bug", "Steel"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 135,
        "defense": 105,
        "specialAttack": 60,
        "specialDefense": 105,
        "speed": 20,
        "total": 425
    }
}, {
    "id": 590,
    "name": "Foongus",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 69,
        "attack": 55,
        "defense": 45,
        "specialAttack": 55,
        "specialDefense": 55,
        "speed": 15,
        "total": 225
    }
}, {
    "id": 591,
    "name": "Amoonguss",
    "types": ["Poison", "Grass"],
    "baseStatistics": {
        "hitPoints": 114,
        "attack": 85,
        "defense": 70,
        "specialAttack": 85,
        "specialDefense": 80,
        "speed": 30,
        "total": 350
    }
}, {
    "id": 592,
    "name": "Frillish",
    "types": ["Ghost", "Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 40,
        "defense": 50,
        "specialAttack": 65,
        "specialDefense": 85,
        "speed": 40,
        "total": 280
    }
}, {
    "id": 593,
    "name": "Jellicent",
    "types": ["Ghost", "Water"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 60,
        "defense": 70,
        "specialAttack": 85,
        "specialDefense": 105,
        "speed": 60,
        "total": 380
    }
}, {
    "id": 594,
    "name": "Alomomola",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 165,
        "attack": 75,
        "defense": 80,
        "specialAttack": 40,
        "specialDefense": 45,
        "speed": 65,
        "total": 305
    }
}, {
    "id": 595,
    "name": "Joltik",
    "types": ["Bug", "Electric"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 47,
        "defense": 50,
        "specialAttack": 57,
        "specialDefense": 50,
        "speed": 65,
        "total": 269
    }
}, {
    "id": 596,
    "name": "Galvantula",
    "types": ["Bug", "Electric"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 77,
        "defense": 60,
        "specialAttack": 97,
        "specialDefense": 60,
        "speed": 108,
        "total": 402
    }
}, {
    "id": 597,
    "name": "Ferroseed",
    "types": ["Steel", "Grass"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 50,
        "defense": 91,
        "specialAttack": 24,
        "specialDefense": 86,
        "speed": 10,
        "total": 261
    }
}, {
    "id": 598,
    "name": "Ferrothorn",
    "types": ["Steel", "Grass"],
    "baseStatistics": {
        "hitPoints": 74,
        "attack": 94,
        "defense": 131,
        "specialAttack": 54,
        "specialDefense": 116,
        "speed": 20,
        "total": 415
    }
}, {
    "id": 599,
    "name": "Klink",
    "types": ["Steel"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 55,
        "defense": 70,
        "specialAttack": 45,
        "specialDefense": 60,
        "speed": 30,
        "total": 260
    }
}, {
    "id": 600,
    "name": "Klang",
    "types": ["Steel"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 80,
        "defense": 95,
        "specialAttack": 70,
        "specialDefense": 85,
        "speed": 50,
        "total": 380
    }
}, {
    "id": 601,
    "name": "Klinklang",
    "types": ["Steel"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 100,
        "defense": 115,
        "specialAttack": 70,
        "specialDefense": 85,
        "speed": 90,
        "total": 460
    }
}, {
    "id": 602,
    "name": "Tynamo",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 55,
        "defense": 40,
        "specialAttack": 45,
        "specialDefense": 40,
        "speed": 60,
        "total": 240
    }
}, {
    "id": 603,
    "name": "Eelektrik",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 85,
        "defense": 70,
        "specialAttack": 75,
        "specialDefense": 70,
        "speed": 40,
        "total": 340
    }
}, {
    "id": 604,
    "name": "Eelektross",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 115,
        "defense": 80,
        "specialAttack": 105,
        "specialDefense": 80,
        "speed": 50,
        "total": 430
    }
}, {
    "id": 605,
    "name": "Elgyem",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 55,
        "defense": 55,
        "specialAttack": 85,
        "specialDefense": 55,
        "speed": 30,
        "total": 280
    }
}, {
    "id": 606,
    "name": "Beheeyem",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 75,
        "defense": 75,
        "specialAttack": 125,
        "specialDefense": 95,
        "speed": 40,
        "total": 410
    }
}, {
    "id": 607,
    "name": "Litwick",
    "types": ["Ghost", "Fire"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 30,
        "defense": 55,
        "specialAttack": 65,
        "specialDefense": 55,
        "speed": 20,
        "total": 225
    }
}, {
    "id": 608,
    "name": "Lampent",
    "types": ["Ghost", "Fire"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 40,
        "defense": 60,
        "specialAttack": 95,
        "specialDefense": 60,
        "speed": 55,
        "total": 310
    }
}, {
    "id": 609,
    "name": "Chandelure",
    "types": ["Ghost", "Fire"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 55,
        "defense": 90,
        "specialAttack": 145,
        "specialDefense": 90,
        "speed": 80,
        "total": 460
    }
}, {
    "id": 610,
    "name": "Axew",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 46,
        "attack": 87,
        "defense": 60,
        "specialAttack": 30,
        "specialDefense": 40,
        "speed": 57,
        "total": 274
    }
}, {
    "id": 611,
    "name": "Fraxure",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 66,
        "attack": 117,
        "defense": 70,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 67,
        "total": 344
    }
}, {
    "id": 612,
    "name": "Haxorus",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 76,
        "attack": 147,
        "defense": 90,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 97,
        "total": 464
    }
}, {
    "id": 613,
    "name": "Cubchoo",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 70,
        "defense": 40,
        "specialAttack": 60,
        "specialDefense": 40,
        "speed": 40,
        "total": 250
    }
}, {
    "id": 614,
    "name": "Beartic",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 130,
        "defense": 80,
        "specialAttack": 70,
        "specialDefense": 80,
        "speed": 50,
        "total": 410
    }
}, {
    "id": 615,
    "name": "Cryogonal",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 50,
        "defense": 50,
        "specialAttack": 95,
        "specialDefense": 135,
        "speed": 105,
        "total": 435
    }
}, {
    "id": 616,
    "name": "Shelmet",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 40,
        "defense": 85,
        "specialAttack": 40,
        "specialDefense": 65,
        "speed": 25,
        "total": 255
    }
}, {
    "id": 617,
    "name": "Accelgor",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 70,
        "defense": 40,
        "specialAttack": 100,
        "specialDefense": 60,
        "speed": 145,
        "total": 415
    }
}, {
    "id": 618,
    "name": "Stunfisk",
    "types": ["Ground", "Electric"],
    "baseStatistics": {
        "hitPoints": 109,
        "attack": 66,
        "defense": 84,
        "specialAttack": 81,
        "specialDefense": 99,
        "speed": 32,
        "total": 362
    }
}, {
    "id": 619,
    "name": "Mienfoo",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 85,
        "defense": 50,
        "specialAttack": 55,
        "specialDefense": 50,
        "speed": 65,
        "total": 305
    }
}, {
    "id": 620,
    "name": "Mienshao",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 125,
        "defense": 60,
        "specialAttack": 95,
        "specialDefense": 60,
        "speed": 105,
        "total": 445
    }
}, {
    "id": 621,
    "name": "Druddigon",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 77,
        "attack": 120,
        "defense": 90,
        "specialAttack": 60,
        "specialDefense": 90,
        "speed": 48,
        "total": 408
    }
}, {
    "id": 622,
    "name": "Golett",
    "types": ["Ground", "Ghost"],
    "baseStatistics": {
        "hitPoints": 59,
        "attack": 74,
        "defense": 50,
        "specialAttack": 35,
        "specialDefense": 50,
        "speed": 35,
        "total": 244
    }
}, {
    "id": 623,
    "name": "Golurk",
    "types": ["Ground", "Ghost"],
    "baseStatistics": {
        "hitPoints": 89,
        "attack": 124,
        "defense": 80,
        "specialAttack": 55,
        "specialDefense": 80,
        "speed": 55,
        "total": 394
    }
}, {
    "id": 624,
    "name": "Pawniard",
    "types": ["Steel", "Dark"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 85,
        "defense": 70,
        "specialAttack": 40,
        "specialDefense": 40,
        "speed": 60,
        "total": 295
    }
}, {
    "id": 625,
    "name": "Bisharp",
    "types": ["Steel", "Dark"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 125,
        "defense": 100,
        "specialAttack": 60,
        "specialDefense": 70,
        "speed": 70,
        "total": 425
    }
}, {
    "id": 626,
    "name": "Bouffalant",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 110,
        "defense": 95,
        "specialAttack": 40,
        "specialDefense": 95,
        "speed": 55,
        "total": 395
    }
}, {
    "id": 627,
    "name": "Rufflet",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 83,
        "defense": 50,
        "specialAttack": 37,
        "specialDefense": 50,
        "speed": 60,
        "total": 280
    }
}, {
    "id": 628,
    "name": "Braviary",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 123,
        "defense": 75,
        "specialAttack": 57,
        "specialDefense": 75,
        "speed": 80,
        "total": 410
    }
}, {
    "id": 629,
    "name": "Vullaby",
    "types": ["Flying", "Dark"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 55,
        "defense": 75,
        "specialAttack": 45,
        "specialDefense": 65,
        "speed": 60,
        "total": 300
    }
}, {
    "id": 630,
    "name": "Mandibuzz",
    "types": ["Flying", "Dark"],
    "baseStatistics": {
        "hitPoints": 110,
        "attack": 65,
        "defense": 105,
        "specialAttack": 55,
        "specialDefense": 95,
        "speed": 80,
        "total": 400
    }
}, {
    "id": 631,
    "name": "Heatmor",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 97,
        "defense": 66,
        "specialAttack": 105,
        "specialDefense": 66,
        "speed": 65,
        "total": 399
    }
}, {
    "id": 632,
    "name": "Durant",
    "types": ["Bug", "Steel"],
    "baseStatistics": {
        "hitPoints": 58,
        "attack": 109,
        "defense": 112,
        "specialAttack": 48,
        "specialDefense": 48,
        "speed": 109,
        "total": 426
    }
}, {
    "id": 633,
    "name": "Deino",
    "types": ["Dragon", "Dark"],
    "baseStatistics": {
        "hitPoints": 52,
        "attack": 65,
        "defense": 50,
        "specialAttack": 45,
        "specialDefense": 50,
        "speed": 38,
        "total": 248
    }
}, {
    "id": 634,
    "name": "Zweilous",
    "types": ["Dragon", "Dark"],
    "baseStatistics": {
        "hitPoints": 72,
        "attack": 85,
        "defense": 70,
        "specialAttack": 65,
        "specialDefense": 70,
        "speed": 58,
        "total": 348
    }
}, {
    "id": 635,
    "name": "Hydreigon",
    "types": ["Dragon", "Dark"],
    "baseStatistics": {
        "hitPoints": 92,
        "attack": 105,
        "defense": 90,
        "specialAttack": 125,
        "specialDefense": 90,
        "speed": 98,
        "total": 508
    }
}, {
    "id": 636,
    "name": "Larvesta",
    "types": ["Bug", "Fire"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 85,
        "defense": 55,
        "specialAttack": 50,
        "specialDefense": 55,
        "speed": 60,
        "total": 305
    }
}, {
    "id": 637,
    "name": "Volcarona",
    "types": ["Bug", "Fire"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 60,
        "defense": 65,
        "specialAttack": 135,
        "specialDefense": 105,
        "speed": 100,
        "total": 465
    }
}, {
    "id": 638,
    "name": "Cobalion",
    "types": ["Fighting", "Steel"],
    "baseStatistics": {
        "hitPoints": 91,
        "attack": 90,
        "defense": 129,
        "specialAttack": 90,
        "specialDefense": 72,
        "speed": 108,
        "total": 489
    }
}, {
    "id": 639,
    "name": "Terrakion",
    "types": ["Fighting", "Rock"],
    "baseStatistics": {
        "hitPoints": 91,
        "attack": 129,
        "defense": 90,
        "specialAttack": 72,
        "specialDefense": 90,
        "speed": 108,
        "total": 489
    }
}, {
    "id": 640,
    "name": "Virizion",
    "types": ["Fighting", "Grass"],
    "baseStatistics": {
        "hitPoints": 91,
        "attack": 90,
        "defense": 72,
        "specialAttack": 90,
        "specialDefense": 129,
        "speed": 108,
        "total": 489
    }
}, {
    "id": 641,
    "name": "Tornadus",
    "types": ["Flying"],
    "baseStatistics": {
        "hitPoints": 79,
        "attack": 115,
        "defense": 70,
        "specialAttack": 125,
        "specialDefense": 80,
        "speed": 111,
        "total": 501
    }
}, {
    "id": 642,
    "name": "Thundurus",
    "types": ["Flying", "Electric"],
    "baseStatistics": {
        "hitPoints": 79,
        "attack": 115,
        "defense": 70,
        "specialAttack": 125,
        "specialDefense": 80,
        "speed": 111,
        "total": 501
    }
}, {
    "id": 643,
    "name": "Reshiram",
    "types": ["Fire", "Dragon"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 120,
        "defense": 100,
        "specialAttack": 150,
        "specialDefense": 120,
        "speed": 90,
        "total": 580
    }
}, {
    "id": 644,
    "name": "Zekrom",
    "types": ["Electric", "Dragon"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 150,
        "defense": 120,
        "specialAttack": 120,
        "specialDefense": 100,
        "speed": 90,
        "total": 580
    }
}, {
    "id": 645,
    "name": "Landorus",
    "types": ["Flying", "Ground"],
    "baseStatistics": {
        "hitPoints": 89,
        "attack": 125,
        "defense": 90,
        "specialAttack": 115,
        "specialDefense": 80,
        "speed": 101,
        "total": 511
    }
}, {
    "id": 646,
    "name": "Kyurem",
    "types": ["Ice", "Dragon"],
    "baseStatistics": {
        "hitPoints": 125,
        "attack": 130,
        "defense": 90,
        "specialAttack": 130,
        "specialDefense": 90,
        "speed": 95,
        "total": 535
    }
}, {
    "id": 647,
    "name": "Keldeo",
    "types": ["Fighting", "Water"],
    "baseStatistics": {
        "hitPoints": 91,
        "attack": 72,
        "defense": 90,
        "specialAttack": 129,
        "specialDefense": 90,
        "speed": 108,
        "total": 489
    }
}, {
    "id": 648,
    "name": "Meloetta",
    "types": ["Normal", "Psychic"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 77,
        "defense": 77,
        "specialAttack": 128,
        "specialDefense": 128,
        "speed": 90,
        "total": 500
    }
}, {
    "id": 649,
    "name": "Genesect",
    "types": ["Bug", "Steel"],
    "baseStatistics": {
        "hitPoints": 71,
        "attack": 120,
        "defense": 95,
        "specialAttack": 120,
        "specialDefense": 95,
        "speed": 99,
        "total": 529
    }
}, {
    "id": 650,
    "name": "Chespin",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 56,
        "attack": 61,
        "defense": 65,
        "specialAttack": 48,
        "specialDefense": 45,
        "speed": 38,
        "total": 257
    }
}, {
    "id": 651,
    "name": "Quilladin",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 61,
        "attack": 78,
        "defense": 95,
        "specialAttack": 56,
        "specialDefense": 58,
        "speed": 57,
        "total": 344
    }
}, {
    "id": 652,
    "name": "Chesnaught",
    "types": ["Fighting", "Grass"],
    "baseStatistics": {
        "hitPoints": 88,
        "attack": 107,
        "defense": 122,
        "specialAttack": 74,
        "specialDefense": 75,
        "speed": 64,
        "total": 442
    }
}, {
    "id": 653,
    "name": "Fennekin",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 40,
        "specialAttack": 62,
        "specialDefense": 60,
        "speed": 60,
        "total": 267
    }
}, {
    "id": 654,
    "name": "Braixen",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 59,
        "attack": 59,
        "defense": 58,
        "specialAttack": 90,
        "specialDefense": 70,
        "speed": 73,
        "total": 350
    }
}, {
    "id": 655,
    "name": "Delphox",
    "types": ["Fire", "Psychic"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 69,
        "defense": 72,
        "specialAttack": 114,
        "specialDefense": 100,
        "speed": 104,
        "total": 459
    }
}, {
    "id": 656,
    "name": "Froakie",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 41,
        "attack": 56,
        "defense": 40,
        "specialAttack": 62,
        "specialDefense": 44,
        "speed": 71,
        "total": 273
    }
}, {
    "id": 657,
    "name": "Frogadier",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 54,
        "attack": 63,
        "defense": 52,
        "specialAttack": 83,
        "specialDefense": 56,
        "speed": 97,
        "total": 351
    }
}, {
    "id": 658,
    "name": "Greninja",
    "types": ["Water", "Dark"],
    "baseStatistics": {
        "hitPoints": 72,
        "attack": 95,
        "defense": 67,
        "specialAttack": 103,
        "specialDefense": 71,
        "speed": 122,
        "total": 458
    }
}, {
    "id": 659,
    "name": "Bunnelby",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 36,
        "defense": 38,
        "specialAttack": 32,
        "specialDefense": 36,
        "speed": 57,
        "total": 199
    }
}, {
    "id": 660,
    "name": "Diggersby",
    "types": ["Normal", "Ground"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 56,
        "defense": 77,
        "specialAttack": 50,
        "specialDefense": 77,
        "speed": 78,
        "total": 338
    }
}, {
    "id": 661,
    "name": "Fletchling",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 50,
        "defense": 43,
        "specialAttack": 40,
        "specialDefense": 38,
        "speed": 62,
        "total": 233
    }
}, {
    "id": 662,
    "name": "Fletchinder",
    "types": ["Flying", "Fire"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 73,
        "defense": 55,
        "specialAttack": 56,
        "specialDefense": 52,
        "speed": 84,
        "total": 320
    }
}, {
    "id": 663,
    "name": "Talonflame",
    "types": ["Flying", "Fire"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 81,
        "defense": 71,
        "specialAttack": 74,
        "specialDefense": 69,
        "speed": 126,
        "total": 421
    }
}, {
    "id": 664,
    "name": "Scatterbug",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 35,
        "defense": 40,
        "specialAttack": 27,
        "specialDefense": 25,
        "speed": 35,
        "total": 162
    }
}, {
    "id": 665,
    "name": "Spewpa",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 22,
        "defense": 60,
        "specialAttack": 27,
        "specialDefense": 30,
        "speed": 29,
        "total": 168
    }
}, {
    "id": 666,
    "name": "Vivillon",
    "types": ["Flying", "Bug"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 52,
        "defense": 50,
        "specialAttack": 90,
        "specialDefense": 50,
        "speed": 89,
        "total": 331
    }
}, {
    "id": 667,
    "name": "Litleo",
    "types": ["Normal", "Fire"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 50,
        "defense": 58,
        "specialAttack": 73,
        "specialDefense": 54,
        "speed": 72,
        "total": 307
    }
}, {
    "id": 668,
    "name": "Pyroar",
    "types": ["Normal", "Fire"],
    "baseStatistics": {
        "hitPoints": 86,
        "attack": 68,
        "defense": 72,
        "specialAttack": 109,
        "specialDefense": 66,
        "speed": 106,
        "total": 421
    }
}, {
    "id": 669,
    "name": "Flabébé",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 38,
        "defense": 39,
        "specialAttack": 61,
        "specialDefense": 79,
        "speed": 42,
        "total": 259
    }
}, {
    "id": 670,
    "name": "Floette",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 54,
        "attack": 45,
        "defense": 47,
        "specialAttack": 75,
        "specialDefense": 98,
        "speed": 52,
        "total": 317
    }
}, {
    "id": 671,
    "name": "Florges",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 65,
        "defense": 68,
        "specialAttack": 112,
        "specialDefense": 154,
        "speed": 75,
        "total": 474
    }
}, {
    "id": 672,
    "name": "Skiddo",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 66,
        "attack": 65,
        "defense": 48,
        "specialAttack": 62,
        "specialDefense": 57,
        "speed": 52,
        "total": 284
    }
}, {
    "id": 673,
    "name": "Gogoat",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 123,
        "attack": 100,
        "defense": 62,
        "specialAttack": 97,
        "specialDefense": 81,
        "speed": 68,
        "total": 408
    }
}, {
    "id": 674,
    "name": "Pancham",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 67,
        "attack": 82,
        "defense": 62,
        "specialAttack": 46,
        "specialDefense": 48,
        "speed": 43,
        "total": 281
    }
}, {
    "id": 675,
    "name": "Pangoro",
    "types": ["Fighting", "Dark"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 124,
        "defense": 78,
        "specialAttack": 69,
        "specialDefense": 71,
        "speed": 58,
        "total": 400
    }
}, {
    "id": 676,
    "name": "Furfrou",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 80,
        "defense": 60,
        "specialAttack": 65,
        "specialDefense": 90,
        "speed": 102,
        "total": 397
    }
}, {
    "id": 677,
    "name": "Espurr",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 48,
        "defense": 54,
        "specialAttack": 63,
        "specialDefense": 60,
        "speed": 68,
        "total": 293
    }
}, {
    "id": 678,
    "name": "Meowstic",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 74,
        "attack": 48,
        "defense": 76,
        "specialAttack": 83,
        "specialDefense": 81,
        "speed": 104,
        "total": 392
    }
}, {
    "id": 679,
    "name": "Honedge",
    "types": ["Ghost", "Steel"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 80,
        "defense": 100,
        "specialAttack": 35,
        "specialDefense": 37,
        "speed": 28,
        "total": 280
    }
}, {
    "id": 680,
    "name": "Doublade",
    "types": ["Ghost", "Steel"],
    "baseStatistics": {
        "hitPoints": 59,
        "attack": 110,
        "defense": 150,
        "specialAttack": 45,
        "specialDefense": 49,
        "speed": 35,
        "total": 389
    }
}, {
    "id": 681,
    "name": "Aegislash",
    "types": ["Ghost", "Steel"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 50,
        "defense": 150,
        "specialAttack": 50,
        "specialDefense": 150,
        "speed": 60,
        "total": 460
    }
}, {
    "id": 682,
    "name": "Spritzee",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 52,
        "defense": 60,
        "specialAttack": 63,
        "specialDefense": 65,
        "speed": 23,
        "total": 263
    }
}, {
    "id": 683,
    "name": "Aromatisse",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 101,
        "attack": 72,
        "defense": 72,
        "specialAttack": 99,
        "specialDefense": 89,
        "speed": 29,
        "total": 361
    }
}, {
    "id": 684,
    "name": "Swirlix",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 48,
        "defense": 66,
        "specialAttack": 59,
        "specialDefense": 57,
        "speed": 49,
        "total": 279
    }
}, {
    "id": 685,
    "name": "Slurpuff",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 82,
        "attack": 80,
        "defense": 86,
        "specialAttack": 85,
        "specialDefense": 75,
        "speed": 72,
        "total": 398
    }
}, {
    "id": 686,
    "name": "Inkay",
    "types": ["Psychic", "Dark"],
    "baseStatistics": {
        "hitPoints": 53,
        "attack": 54,
        "defense": 53,
        "specialAttack": 37,
        "specialDefense": 46,
        "speed": 45,
        "total": 235
    }
}, {
    "id": 687,
    "name": "Malamar",
    "types": ["Psychic", "Dark"],
    "baseStatistics": {
        "hitPoints": 86,
        "attack": 92,
        "defense": 88,
        "specialAttack": 68,
        "specialDefense": 75,
        "speed": 73,
        "total": 396
    }
}, {
    "id": 688,
    "name": "Binacle",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 42,
        "attack": 52,
        "defense": 67,
        "specialAttack": 39,
        "specialDefense": 56,
        "speed": 50,
        "total": 264
    }
}, {
    "id": 689,
    "name": "Barbaracle",
    "types": ["Rock", "Water"],
    "baseStatistics": {
        "hitPoints": 72,
        "attack": 105,
        "defense": 115,
        "specialAttack": 54,
        "specialDefense": 86,
        "speed": 68,
        "total": 428
    }
}, {
    "id": 690,
    "name": "Skrelp",
    "types": ["Poison", "Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 60,
        "defense": 60,
        "specialAttack": 60,
        "specialDefense": 60,
        "speed": 30,
        "total": 270
    }
}, {
    "id": 691,
    "name": "Dragalge",
    "types": ["Poison", "Dragon"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 75,
        "defense": 90,
        "specialAttack": 97,
        "specialDefense": 123,
        "speed": 44,
        "total": 429
    }
}, {
    "id": 692,
    "name": "Clauncher",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 53,
        "defense": 62,
        "specialAttack": 58,
        "specialDefense": 63,
        "speed": 44,
        "total": 280
    }
}, {
    "id": 693,
    "name": "Clawitzer",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 71,
        "attack": 73,
        "defense": 88,
        "specialAttack": 120,
        "specialDefense": 89,
        "speed": 59,
        "total": 429
    }
}, {
    "id": 694,
    "name": "Helioptile",
    "types": ["Normal", "Electric"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 38,
        "defense": 33,
        "specialAttack": 61,
        "specialDefense": 43,
        "speed": 70,
        "total": 245
    }
}, {
    "id": 695,
    "name": "Heliolisk",
    "types": ["Normal", "Electric"],
    "baseStatistics": {
        "hitPoints": 62,
        "attack": 55,
        "defense": 52,
        "specialAttack": 109,
        "specialDefense": 94,
        "speed": 109,
        "total": 419
    }
}, {
    "id": 696,
    "name": "Tyrunt",
    "types": ["Rock", "Dragon"],
    "baseStatistics": {
        "hitPoints": 58,
        "attack": 89,
        "defense": 77,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 48,
        "total": 304
    }
}, {
    "id": 697,
    "name": "Tyrantrum",
    "types": ["Rock", "Dragon"],
    "baseStatistics": {
        "hitPoints": 82,
        "attack": 121,
        "defense": 119,
        "specialAttack": 69,
        "specialDefense": 59,
        "speed": 71,
        "total": 439
    }
}, {
    "id": 698,
    "name": "Amaura",
    "types": ["Rock", "Ice"],
    "baseStatistics": {
        "hitPoints": 77,
        "attack": 59,
        "defense": 50,
        "specialAttack": 67,
        "specialDefense": 63,
        "speed": 46,
        "total": 285
    }
}, {
    "id": 699,
    "name": "Aurorus",
    "types": ["Rock", "Ice"],
    "baseStatistics": {
        "hitPoints": 123,
        "attack": 77,
        "defense": 72,
        "specialAttack": 99,
        "specialDefense": 92,
        "speed": 58,
        "total": 398
    }
}, {
    "id": 700,
    "name": "Sylveon",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 65,
        "defense": 65,
        "specialAttack": 110,
        "specialDefense": 130,
        "speed": 60,
        "total": 430
    }
}, {
    "id": 701,
    "name": "Hawlucha",
    "types": ["Fighting", "Flying"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 92,
        "defense": 75,
        "specialAttack": 74,
        "specialDefense": 63,
        "speed": 118,
        "total": 422
    }
}, {
    "id": 702,
    "name": "Dedenne",
    "types": ["Electric", "Fairy"],
    "baseStatistics": {
        "hitPoints": 67,
        "attack": 58,
        "defense": 57,
        "specialAttack": 81,
        "specialDefense": 67,
        "speed": 101,
        "total": 364
    }
}, {
    "id": 703,
    "name": "Carbink",
    "types": ["Rock", "Fairy"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 50,
        "defense": 150,
        "specialAttack": 50,
        "specialDefense": 150,
        "speed": 50,
        "total": 450
    }
}, {
    "id": 704,
    "name": "Goomy",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 50,
        "defense": 35,
        "specialAttack": 55,
        "specialDefense": 75,
        "speed": 40,
        "total": 255
    }
}, {
    "id": 705,
    "name": "Sliggoo",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 75,
        "defense": 53,
        "specialAttack": 83,
        "specialDefense": 113,
        "speed": 60,
        "total": 384
    }
}, {
    "id": 706,
    "name": "Goodra",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 100,
        "defense": 70,
        "specialAttack": 110,
        "specialDefense": 150,
        "speed": 80,
        "total": 510
    }
}, {
    "id": 707,
    "name": "Klefki",
    "types": ["Steel", "Fairy"],
    "baseStatistics": {
        "hitPoints": 57,
        "attack": 80,
        "defense": 91,
        "specialAttack": 80,
        "specialDefense": 87,
        "speed": 75,
        "total": 413
    }
}, {
    "id": 708,
    "name": "Phantump",
    "types": ["Ghost", "Grass"],
    "baseStatistics": {
        "hitPoints": 43,
        "attack": 70,
        "defense": 48,
        "specialAttack": 50,
        "specialDefense": 60,
        "speed": 38,
        "total": 266
    }
}, {
    "id": 709,
    "name": "Trevenant",
    "types": ["Ghost", "Grass"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 110,
        "defense": 76,
        "specialAttack": 65,
        "specialDefense": 82,
        "speed": 56,
        "total": 389
    }
}, {
    "id": 710,
    "name": "Pumpkaboo",
    "types": ["Ghost", "Grass"],
    "baseStatistics": {
        "hitPoints": 44,
        "attack": 66,
        "defense": 70,
        "specialAttack": 44,
        "specialDefense": 55,
        "speed": 56,
        "total": 291
    }
}, {
    "id": 711,
    "name": "Gourgeist",
    "types": ["Ghost", "Grass"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 85,
        "defense": 122,
        "specialAttack": 58,
        "specialDefense": 75,
        "speed": 99,
        "total": 439
    }
}, {
    "id": 712,
    "name": "Bergmite",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 69,
        "defense": 85,
        "specialAttack": 32,
        "specialDefense": 35,
        "speed": 28,
        "total": 249
    }
}, {
    "id": 713,
    "name": "Avalugg",
    "types": ["Ice"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 117,
        "defense": 184,
        "specialAttack": 44,
        "specialDefense": 46,
        "speed": 28,
        "total": 419
    }
}, {
    "id": 714,
    "name": "Noibat",
    "types": ["Flying", "Dragon"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 30,
        "defense": 35,
        "specialAttack": 45,
        "specialDefense": 40,
        "speed": 55,
        "total": 205
    }
}, {
    "id": 715,
    "name": "Noivern",
    "types": ["Flying", "Dragon"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 70,
        "defense": 80,
        "specialAttack": 97,
        "specialDefense": 80,
        "speed": 123,
        "total": 450
    }
}, {
    "id": 716,
    "name": "Xerneas",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 126,
        "attack": 131,
        "defense": 95,
        "specialAttack": 131,
        "specialDefense": 98,
        "speed": 99,
        "total": 554
    }
}, {
    "id": 717,
    "name": "Yveltal",
    "types": ["Flying", "Dark"],
    "baseStatistics": {
        "hitPoints": 126,
        "attack": 131,
        "defense": 95,
        "specialAttack": 131,
        "specialDefense": 98,
        "speed": 99,
        "total": 554
    }
}, {
    "id": 718,
    "name": "Zygarde",
    "types": ["Ground", "Dragon"],
    "baseStatistics": {
        "hitPoints": 108,
        "attack": 100,
        "defense": 121,
        "specialAttack": 81,
        "specialDefense": 95,
        "speed": 95,
        "total": 492
    }
}, {
    "id": 719,
    "name": "Diancie",
    "types": ["Rock", "Fairy"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 100,
        "defense": 150,
        "specialAttack": 100,
        "specialDefense": 150,
        "speed": 50,
        "total": 550
    }
}, {
    "id": 720,
    "name": "Hoopa ",
    "types": ["Ghost", "Psychic"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 110,
        "defense": 60,
        "specialAttack": 150,
        "specialDefense": 130,
        "speed": 70,
        "total": 520
    }
}, {
    "id": 721,
    "name": "Volcanion",
    "types": ["Fire", "Water"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 110,
        "defense": 120,
        "specialAttack": 130,
        "specialDefense": 90,
        "speed": 70,
        "total": 520
    }
}, {
    "id": 722,
    "name": "Rowlet",
    "types": ["Flying", "Grass"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 55,
        "defense": 55,
        "specialAttack": 50,
        "specialDefense": 50,
        "speed": 42,
        "total": 252
    }
}, {
    "id": 723,
    "name": "Dartrix",
    "types": ["Flying", "Grass"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 75,
        "defense": 75,
        "specialAttack": 70,
        "specialDefense": 70,
        "speed": 52,
        "total": 342
    }
}, {
    "id": 724,
    "name": "Decidueye",
    "types": ["Ghost", "Grass"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 107,
        "defense": 75,
        "specialAttack": 100,
        "specialDefense": 100,
        "speed": 70,
        "total": 452
    }
}, {
    "id": 725,
    "name": "Litten",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 65,
        "defense": 40,
        "specialAttack": 60,
        "specialDefense": 40,
        "speed": 70,
        "total": 275
    }
}, {
    "id": 726,
    "name": "Torracat",
    "types": ["Fire"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 85,
        "defense": 50,
        "specialAttack": 80,
        "specialDefense": 50,
        "speed": 90,
        "total": 355
    }
}, {
    "id": 727,
    "name": "Incineroar",
    "types": ["Fire", "Dark"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 115,
        "defense": 90,
        "specialAttack": 80,
        "specialDefense": 90,
        "speed": 60,
        "total": 435
    }
}, {
    "id": 728,
    "name": "Popplio",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 54,
        "defense": 54,
        "specialAttack": 66,
        "specialDefense": 56,
        "speed": 40,
        "total": 270
    }
}, {
    "id": 729,
    "name": "Brionne",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 69,
        "defense": 69,
        "specialAttack": 91,
        "specialDefense": 81,
        "speed": 50,
        "total": 360
    }
}, {
    "id": 730,
    "name": "Primarina",
    "types": ["Water", "Fairy"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 74,
        "defense": 74,
        "specialAttack": 126,
        "specialDefense": 116,
        "speed": 60,
        "total": 450
    }
}, {
    "id": 731,
    "name": "Pikipek",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 35,
        "attack": 75,
        "defense": 30,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 65,
        "total": 230
    }
}, {
    "id": 732,
    "name": "Trumbeak",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 85,
        "defense": 50,
        "specialAttack": 40,
        "specialDefense": 50,
        "speed": 75,
        "total": 300
    }
}, {
    "id": 733,
    "name": "Toucannon",
    "types": ["Normal", "Flying"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 120,
        "defense": 75,
        "specialAttack": 75,
        "specialDefense": 75,
        "speed": 60,
        "total": 405
    }
}, {
    "id": 734,
    "name": "Yungoos",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 48,
        "attack": 70,
        "defense": 30,
        "specialAttack": 30,
        "specialDefense": 30,
        "speed": 45,
        "total": 205
    }
}, {
    "id": 735,
    "name": "Gumshoos",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 88,
        "attack": 110,
        "defense": 60,
        "specialAttack": 55,
        "specialDefense": 60,
        "speed": 45,
        "total": 330
    }
}, {
    "id": 736,
    "name": "Grubbin",
    "types": ["Bug"],
    "baseStatistics": {
        "hitPoints": 47,
        "attack": 62,
        "defense": 45,
        "specialAttack": 55,
        "specialDefense": 45,
        "speed": 46,
        "total": 253
    }
}, {
    "id": 737,
    "name": "Charjabug",
    "types": ["Bug", "Electric"],
    "baseStatistics": {
        "hitPoints": 57,
        "attack": 82,
        "defense": 95,
        "specialAttack": 55,
        "specialDefense": 75,
        "speed": 36,
        "total": 343
    }
}, {
    "id": 738,
    "name": "Vikavolt",
    "types": ["Bug", "Electric"],
    "baseStatistics": {
        "hitPoints": 77,
        "attack": 70,
        "defense": 90,
        "specialAttack": 145,
        "specialDefense": 75,
        "speed": 43,
        "total": 423
    }
}, {
    "id": 739,
    "name": "Crabrawler",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 47,
        "attack": 82,
        "defense": 57,
        "specialAttack": 42,
        "specialDefense": 47,
        "speed": 63,
        "total": 291
    }
}, {
    "id": 740,
    "name": "Crabominable",
    "types": ["Fighting", "Ice"],
    "baseStatistics": {
        "hitPoints": 97,
        "attack": 132,
        "defense": 77,
        "specialAttack": 62,
        "specialDefense": 67,
        "speed": 43,
        "total": 381
    }
}, {
    "id": 741,
    "name": "Oricorio",
    "types": ["Flying", "Fire"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 70,
        "defense": 70,
        "specialAttack": 98,
        "specialDefense": 70,
        "speed": 93,
        "total": 401
    }
}, {
    "id": 742,
    "name": "Cutiefly",
    "types": ["Bug", "Fairy"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 45,
        "defense": 40,
        "specialAttack": 55,
        "specialDefense": 40,
        "speed": 84,
        "total": 264
    }
}, {
    "id": 743,
    "name": "Ribombee",
    "types": ["Bug", "Fairy"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 55,
        "defense": 60,
        "specialAttack": 95,
        "specialDefense": 70,
        "speed": 124,
        "total": 404
    }
}, {
    "id": 744,
    "name": "Rockruff",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 65,
        "defense": 40,
        "specialAttack": 30,
        "specialDefense": 40,
        "speed": 60,
        "total": 235
    }
}, {
    "id": 745,
    "name": "Lycanroc",
    "types": ["Rock"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 115,
        "defense": 65,
        "specialAttack": 55,
        "specialDefense": 65,
        "speed": 112,
        "total": 412
    }
}, {
    "id": 746,
    "name": "Wishiwashi",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 20,
        "defense": 20,
        "specialAttack": 25,
        "specialDefense": 25,
        "speed": 40,
        "total": 130
    }
}, {
    "id": 747,
    "name": "Mareanie",
    "types": ["Poison", "Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 53,
        "defense": 62,
        "specialAttack": 43,
        "specialDefense": 52,
        "speed": 45,
        "total": 255
    }
}, {
    "id": 748,
    "name": "Toxapex",
    "types": ["Poison", "Water"],
    "baseStatistics": {
        "hitPoints": 50,
        "attack": 63,
        "defense": 152,
        "specialAttack": 53,
        "specialDefense": 142,
        "speed": 35,
        "total": 445
    }
}, {
    "id": 749,
    "name": "Mudbray",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 100,
        "defense": 70,
        "specialAttack": 45,
        "specialDefense": 55,
        "speed": 45,
        "total": 315
    }
}, {
    "id": 750,
    "name": "Mudsdale",
    "types": ["Ground"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 125,
        "defense": 100,
        "specialAttack": 55,
        "specialDefense": 85,
        "speed": 35,
        "total": 400
    }
}, {
    "id": 751,
    "name": "Dewpider",
    "types": ["Bug", "Water"],
    "baseStatistics": {
        "hitPoints": 38,
        "attack": 40,
        "defense": 52,
        "specialAttack": 40,
        "specialDefense": 72,
        "speed": 27,
        "total": 231
    }
}, {
    "id": 752,
    "name": "Araquanid",
    "types": ["Bug", "Water"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 70,
        "defense": 92,
        "specialAttack": 50,
        "specialDefense": 132,
        "speed": 42,
        "total": 386
    }
}, {
    "id": 753,
    "name": "Fomantis",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 55,
        "defense": 35,
        "specialAttack": 50,
        "specialDefense": 35,
        "speed": 35,
        "total": 210
    }
}, {
    "id": 754,
    "name": "Lurantis",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 105,
        "defense": 90,
        "specialAttack": 80,
        "specialDefense": 90,
        "speed": 45,
        "total": 410
    }
}, {
    "id": 755,
    "name": "Morelull",
    "types": ["Grass", "Fairy"],
    "baseStatistics": {
        "hitPoints": 40,
        "attack": 35,
        "defense": 55,
        "specialAttack": 65,
        "specialDefense": 75,
        "speed": 15,
        "total": 245
    }
}, {
    "id": 756,
    "name": "Shiinotic",
    "types": ["Grass", "Fairy"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 45,
        "defense": 80,
        "specialAttack": 90,
        "specialDefense": 100,
        "speed": 30,
        "total": 345
    }
}, {
    "id": 757,
    "name": "Salandit",
    "types": ["Poison", "Fire"],
    "baseStatistics": {
        "hitPoints": 48,
        "attack": 44,
        "defense": 40,
        "specialAttack": 71,
        "specialDefense": 40,
        "speed": 77,
        "total": 272
    }
}, {
    "id": 758,
    "name": "Salazzle",
    "types": ["Poison", "Fire"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 64,
        "defense": 60,
        "specialAttack": 111,
        "specialDefense": 60,
        "speed": 117,
        "total": 412
    }
}, {
    "id": 759,
    "name": "Stufful",
    "types": ["Normal", "Fighting"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 75,
        "defense": 50,
        "specialAttack": 45,
        "specialDefense": 50,
        "speed": 50,
        "total": 270
    }
}, {
    "id": 760,
    "name": "Bewear",
    "types": ["Normal", "Fighting"],
    "baseStatistics": {
        "hitPoints": 120,
        "attack": 125,
        "defense": 80,
        "specialAttack": 55,
        "specialDefense": 60,
        "speed": 60,
        "total": 380
    }
}, {
    "id": 761,
    "name": "Bounsweet",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 42,
        "attack": 30,
        "defense": 38,
        "specialAttack": 30,
        "specialDefense": 38,
        "speed": 32,
        "total": 168
    }
}, {
    "id": 762,
    "name": "Steenee",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 52,
        "attack": 40,
        "defense": 48,
        "specialAttack": 40,
        "specialDefense": 48,
        "speed": 62,
        "total": 238
    }
}, {
    "id": 763,
    "name": "Tsareena",
    "types": ["Grass"],
    "baseStatistics": {
        "hitPoints": 72,
        "attack": 120,
        "defense": 98,
        "specialAttack": 50,
        "specialDefense": 98,
        "speed": 72,
        "total": 438
    }
}, {
    "id": 764,
    "name": "Comfey",
    "types": ["Fairy"],
    "baseStatistics": {
        "hitPoints": 51,
        "attack": 52,
        "defense": 90,
        "specialAttack": 82,
        "specialDefense": 110,
        "speed": 100,
        "total": 434
    }
}, {
    "id": 765,
    "name": "Oranguru",
    "types": ["Normal", "Psychic"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 60,
        "defense": 80,
        "specialAttack": 90,
        "specialDefense": 110,
        "speed": 60,
        "total": 400
    }
}, {
    "id": 766,
    "name": "Passimian",
    "types": ["Fighting"],
    "baseStatistics": {
        "hitPoints": 100,
        "attack": 120,
        "defense": 90,
        "specialAttack": 40,
        "specialDefense": 60,
        "speed": 80,
        "total": 390
    }
}, {
    "id": 767,
    "name": "Wimpod",
    "types": ["Bug", "Water"],
    "baseStatistics": {
        "hitPoints": 25,
        "attack": 35,
        "defense": 40,
        "specialAttack": 20,
        "specialDefense": 30,
        "speed": 80,
        "total": 205
    }
}, {
    "id": 768,
    "name": "Golisopod",
    "types": ["Bug", "Water"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 125,
        "defense": 140,
        "specialAttack": 60,
        "specialDefense": 90,
        "speed": 40,
        "total": 455
    }
}, {
    "id": 769,
    "name": "Sandygast",
    "types": ["Ground", "Ghost"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 55,
        "defense": 80,
        "specialAttack": 70,
        "specialDefense": 45,
        "speed": 15,
        "total": 265
    }
}, {
    "id": 770,
    "name": "Palossand",
    "types": ["Ground", "Ghost"],
    "baseStatistics": {
        "hitPoints": 85,
        "attack": 75,
        "defense": 110,
        "specialAttack": 100,
        "specialDefense": 75,
        "speed": 35,
        "total": 395
    }
}, {
    "id": 771,
    "name": "Pyukumuku",
    "types": ["Water"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 60,
        "defense": 130,
        "specialAttack": 30,
        "specialDefense": 130,
        "speed": 5,
        "total": 355
    }
}, {
    "id": 772,
    "name": "Type: Null",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 95,
        "defense": 95,
        "specialAttack": 95,
        "specialDefense": 95,
        "speed": 59,
        "total": 439
    }
}, {
    "id": 773,
    "name": "Silvally",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 95,
        "attack": 95,
        "defense": 95,
        "specialAttack": 95,
        "specialDefense": 95,
        "speed": 95,
        "total": 475
    }
}, {
    "id": 774,
    "name": "Minior",
    "types": ["Flying", "Rock"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 60,
        "defense": 100,
        "specialAttack": 60,
        "specialDefense": 100,
        "speed": 60,
        "total": 380
    }
}, {
    "id": 775,
    "name": "Komala",
    "types": ["Normal"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 115,
        "defense": 65,
        "specialAttack": 75,
        "specialDefense": 95,
        "speed": 65,
        "total": 415
    }
}, {
    "id": 776,
    "name": "Turtonator",
    "types": ["Fire", "Dragon"],
    "baseStatistics": {
        "hitPoints": 60,
        "attack": 78,
        "defense": 135,
        "specialAttack": 91,
        "specialDefense": 85,
        "speed": 36,
        "total": 425
    }
}, {
    "id": 777,
    "name": "Togedemaru",
    "types": ["Steel", "Electric"],
    "baseStatistics": {
        "hitPoints": 65,
        "attack": 98,
        "defense": 63,
        "specialAttack": 40,
        "specialDefense": 73,
        "speed": 96,
        "total": 370
    }
}, {
    "id": 778,
    "name": "Mimikyu",
    "types": ["Ghost", "Fairy"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 90,
        "defense": 80,
        "specialAttack": 50,
        "specialDefense": 105,
        "speed": 96,
        "total": 421
    }
}, {
    "id": 779,
    "name": "Bruxish",
    "types": ["Water", "Psychic"],
    "baseStatistics": {
        "hitPoints": 68,
        "attack": 105,
        "defense": 70,
        "specialAttack": 70,
        "specialDefense": 70,
        "speed": 92,
        "total": 407
    }
}, {
    "id": 780,
    "name": "Drampa",
    "types": ["Normal", "Dragon"],
    "baseStatistics": {
        "hitPoints": 78,
        "attack": 60,
        "defense": 85,
        "specialAttack": 135,
        "specialDefense": 91,
        "speed": 36,
        "total": 407
    }
}, {
    "id": 781,
    "name": "Dhelmise",
    "types": ["Ghost", "Grass"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 131,
        "defense": 100,
        "specialAttack": 86,
        "specialDefense": 90,
        "speed": 40,
        "total": 447
    }
}, {
    "id": 782,
    "name": "Jangmo-o",
    "types": ["Dragon"],
    "baseStatistics": {
        "hitPoints": 45,
        "attack": 55,
        "defense": 65,
        "specialAttack": 45,
        "specialDefense": 45,
        "speed": 45,
        "total": 255
    }
}, {
    "id": 783,
    "name": "Hakamo-o",
    "types": ["Fighting", "Dragon"],
    "baseStatistics": {
        "hitPoints": 55,
        "attack": 75,
        "defense": 90,
        "specialAttack": 65,
        "specialDefense": 70,
        "speed": 65,
        "total": 365
    }
}, {
    "id": 784,
    "name": "Kommo-o",
    "types": ["Fighting", "Dragon"],
    "baseStatistics": {
        "hitPoints": 75,
        "attack": 110,
        "defense": 125,
        "specialAttack": 100,
        "specialDefense": 105,
        "speed": 85,
        "total": 525
    }
}, {
    "id": 785,
    "name": "Tapu Koko",
    "types": ["Electric", "Fairy"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 115,
        "defense": 85,
        "specialAttack": 95,
        "specialDefense": 75,
        "speed": 130,
        "total": 500
    }
}, {
    "id": 786,
    "name": "Tapu Lele",
    "types": ["Psychic", "Fairy"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 85,
        "defense": 75,
        "specialAttack": 130,
        "specialDefense": 115,
        "speed": 95,
        "total": 500
    }
}, {
    "id": 787,
    "name": "Tapu Bulu",
    "types": ["Grass", "Fairy"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 130,
        "defense": 115,
        "specialAttack": 85,
        "specialDefense": 95,
        "speed": 75,
        "total": 500
    }
}, {
    "id": 788,
    "name": "Tapu Fini",
    "types": ["Water", "Fairy"],
    "baseStatistics": {
        "hitPoints": 70,
        "attack": 75,
        "defense": 115,
        "specialAttack": 95,
        "specialDefense": 130,
        "speed": 85,
        "total": 500
    }
}, {
    "id": 789,
    "name": "Cosmog",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 43,
        "attack": 29,
        "defense": 31,
        "specialAttack": 29,
        "specialDefense": 31,
        "speed": 37,
        "total": 157
    }
}, {
    "id": 790,
    "name": "Cosmoem",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 43,
        "attack": 29,
        "defense": 131,
        "specialAttack": 29,
        "specialDefense": 131,
        "speed": 37,
        "total": 357
    }
}, {
    "id": 791,
    "name": "Solgaleo",
    "types": ["Steel", "Psychic"],
    "baseStatistics": {
        "hitPoints": 137,
        "attack": 137,
        "defense": 107,
        "specialAttack": 113,
        "specialDefense": 89,
        "speed": 97,
        "total": 543
    }
}, {
    "id": 792,
    "name": "Lunala",
    "types": ["Ghost", "Psychic"],
    "baseStatistics": {
        "hitPoints": 137,
        "attack": 113,
        "defense": 89,
        "specialAttack": 137,
        "specialDefense": 107,
        "speed": 97,
        "total": 543
    }
}, {
    "id": 793,
    "name": "Nihilego",
    "types": ["Poison", "Rock"],
    "baseStatistics": {
        "hitPoints": 109,
        "attack": 53,
        "defense": 47,
        "specialAttack": 127,
        "specialDefense": 131,
        "speed": 103,
        "total": 461
    }
}, {
    "id": 794,
    "name": "Buzzwole",
    "types": ["Fighting", "Bug"],
    "baseStatistics": {
        "hitPoints": 107,
        "attack": 139,
        "defense": 139,
        "specialAttack": 53,
        "specialDefense": 53,
        "speed": 79,
        "total": 463
    }
}, {
    "id": 795,
    "name": "Pheromosa",
    "types": ["Fighting", "Bug"],
    "baseStatistics": {
        "hitPoints": 71,
        "attack": 137,
        "defense": 37,
        "specialAttack": 137,
        "specialDefense": 37,
        "speed": 151,
        "total": 499
    }
}, {
    "id": 796,
    "name": "Xurkitree",
    "types": ["Electric"],
    "baseStatistics": {
        "hitPoints": 83,
        "attack": 89,
        "defense": 71,
        "specialAttack": 173,
        "specialDefense": 71,
        "speed": 83,
        "total": 487
    }
}, {
    "id": 797,
    "name": "Celesteela",
    "types": ["Flying", "Steel"],
    "baseStatistics": {
        "hitPoints": 97,
        "attack": 101,
        "defense": 103,
        "specialAttack": 107,
        "specialDefense": 101,
        "speed": 61,
        "total": 473
    }
}, {
    "id": 798,
    "name": "Kartana",
    "types": ["Steel", "Grass"],
    "baseStatistics": {
        "hitPoints": 59,
        "attack": 181,
        "defense": 131,
        "specialAttack": 59,
        "specialDefense": 31,
        "speed": 109,
        "total": 511
    }
}, {
    "id": 799,
    "name": "Guzzlord",
    "types": ["Dragon", "Dark"],
    "baseStatistics": {
        "hitPoints": 223,
        "attack": 101,
        "defense": 53,
        "specialAttack": 97,
        "specialDefense": 53,
        "speed": 43,
        "total": 347
    }
}, {
    "id": 800,
    "name": "Necrozma",
    "types": ["Psychic"],
    "baseStatistics": {
        "hitPoints": 97,
        "attack": 107,
        "defense": 101,
        "specialAttack": 127,
        "specialDefense": 89,
        "speed": 79,
        "total": 503
    }
}, {
    "id": 801,
    "name": "Magearna",
    "types": ["Steel", "Fairy"],
    "baseStatistics": {
        "hitPoints": 80,
        "attack": 95,
        "defense": 115,
        "specialAttack": 130,
        "specialDefense": 115,
        "speed": 65,
        "total": 520
    }
}, {
    "id": 802,
    "name": "Marshadow",
    "types": ["Fighting", "Ghost"],
    "baseStatistics": {
        "hitPoints": 90,
        "attack": 125,
        "defense": 80,
        "specialAttack": 90,
        "specialDefense": 90,
        "speed": 125,
        "total": 510
    }
}];
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokedexEntryFull = function (_React$Component) {
    _inherits(PokedexEntryFull, _React$Component);

    function PokedexEntryFull() {
        _classCallCheck(this, PokedexEntryFull);

        return _possibleConstructorReturn(this, (PokedexEntryFull.__proto__ || Object.getPrototypeOf(PokedexEntryFull)).call(this));
    }

    _createClass(PokedexEntryFull, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card entry" },
                React.createElement(
                    "div",
                    { className: "heading" },
                    "000 Name"
                ),
                React.createElement(
                    "div",
                    { className: "body" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            null,
                            React.createElement("div", { className: "sprites portrait" }),
                            React.createElement("audio", { controls: "controls" })
                        ),
                        React.createElement(
                            "div",
                            null,
                            "info"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "stats"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        "abilities"
                    ),
                    React.createElement(
                        "div",
                        null,
                        "evolutions"
                    ),
                    React.createElement(
                        "div",
                        null,
                        "forms"
                    ),
                    React.createElement(
                        "div",
                        null,
                        "moves"
                    )
                )
            );
        }
    }]);

    return PokedexEntryFull;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokedexEntryShort = function (_React$Component) {
    _inherits(PokedexEntryShort, _React$Component);

    function PokedexEntryShort(props) {
        _classCallCheck(this, PokedexEntryShort);

        var _this = _possibleConstructorReturn(this, (PokedexEntryShort.__proto__ || Object.getPrototypeOf(PokedexEntryShort)).call(this, props));

        _this.state = _this.props.value;
        return _this;
    }

    _createClass(PokedexEntryShort, [{
        key: "getClassName",
        value: function getClassName() {
            var name = this.state.name;
            name = name.toLowerCase();
            name = name.replace(" ", "");
            name = name.replace("-", "");
            return "sprite small " + name;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "pokemon", onClick: function onClick() {
                        return _this2.props.onClick();
                    } },
                React.createElement(
                    "div",
                    { className: "icon" },
                    React.createElement("div", { className: this.getClassName() })
                ),
                React.createElement(
                    "div",
                    { className: "name" },
                    this.state.id,
                    " ",
                    this.state.name
                ),
                React.createElement(
                    "div",
                    { className: "types" },
                    React.createElement(
                        "div",
                        { className: this.state.types[0].toString().toLowerCase() },
                        this.state.types[0]
                    ),
                    React.createElement(
                        "div",
                        { className: this.state.types[1] ? this.state.types[1].toString().toLowerCase() : null },
                        this.state.types[1]
                    )
                ),
                React.createElement(
                    "div",
                    { className: "abilities" },
                    "abilities"
                ),
                React.createElement(
                    "div",
                    { className: "statistics" },
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.hitPoints
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.attack
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.defense
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.specialAttack
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.specialDefense
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.speed
                    ),
                    React.createElement(
                        "div",
                        null,
                        this.state.baseStatistics.total
                    )
                )
            );
        }
    }]);

    return PokedexEntryShort;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokedexSearch = function (_React$Component) {
    _inherits(PokedexSearch, _React$Component);

    function PokedexSearch() {
        _classCallCheck(this, PokedexSearch);

        var _this = _possibleConstructorReturn(this, (PokedexSearch.__proto__ || Object.getPrototypeOf(PokedexSearch)).call(this));

        _this._data = document.data;
        return _this;
    }

    _createClass(PokedexSearch, [{
        key: "handleClick",
        value: function handleClick(x) {
            console.log(x);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "card search" },
                React.createElement(
                    "div",
                    { className: "heading" },
                    "heading"
                ),
                React.createElement(
                    "div",
                    { className: "body" },
                    React.createElement(
                        "div",
                        { className: "tab-bar" },
                        React.createElement(
                            "div",
                            { className: "tab" },
                            "Pokemon"
                        ),
                        React.createElement(
                            "div",
                            { className: "tab" },
                            "Moves"
                        ),
                        React.createElement(
                            "div",
                            { className: "tab" },
                            "Abilities"
                        ),
                        React.createElement(
                            "div",
                            { className: "tab" },
                            "Items"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement("input", { type: "text", className: "form-control" })
                    ),
                    React.createElement(
                        "div",
                        { className: "results" },
                        this._data.map(function (x, i) {
                            return React.createElement(PokedexEntryShort, { value: x, key: i, onClick: function onClick() {
                                    return _this2.handleClick(x);
                                } });
                        })
                    )
                )
            );
        }
    }]);

    return PokedexSearch;
}(React.Component);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PokedexComponent = function (_React$Component) {
    _inherits(PokedexComponent, _React$Component);

    function PokedexComponent() {
        _classCallCheck(this, PokedexComponent);

        var _this = _possibleConstructorReturn(this, (PokedexComponent.__proto__ || Object.getPrototypeOf(PokedexComponent)).call(this));

        _this.state = {
            show: false
        };
        return _this;
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

    _createClass(PokedexComponent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "pokedex" },
                React.createElement(PokedexSearch, null),
                React.createElement(PokedexEntryFull, { className: "is-hidden" })
            );
        }
    }]);

    return PokedexComponent;
}(React.Component);

ReactDOM.render(React.createElement(PokedexComponent, null), document.getElementById('content'));
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