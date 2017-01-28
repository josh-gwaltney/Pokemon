class PokedexComponent extends React.Component {
    constructor(){
        super();
        this._data = [
            {
                id: '001',
                name: 'Bulbasaur',
                types: [
                    'Grass',
                    'Poison'
                ],
                abilities: [
                    'Overgrow',
                    'Chlorophyll'
                ],
                hp: 45,
                attack: 49,
                defense: 49,
                spAttack: 65,
                spDefense: 65,
                speed: 45,
                total: 318
            },
            {
                id: '002',
                name: 'Ivysaur',
                types: [
                    'Grass',
                    'Poison'
                ],
                abilities: [
                    'Overgrow',
                    'Chlorophyll'
                ],
                hp: 60,
                attack: 62,
                defense: 63,
                spAttack: 80,
                spDefense: 80,
                speed: 60,
                total: 405
            },
            {
                id: '003',
                name: 'Venusaur',
                types: [
                    'Grass',
                    'Poison'
                ],
                abilities: [
                    'Overgrow',
                    'Chlorophyll'
                ],
                hp: 80,
                attack: 82,
                defense: 83,
                spAttack: 100,
                spDefense: 100,
                speed: 80,
                total: 525
            }
        ];

    }

    render(){
        return (
          <div className="row">
              <div className="col-sm-12">
                  <div className="card white">
                      <div className="heading primary">
                          <title className="card-title"></title>
                      </div>
                      <div className="body">
                          <div className="form-group">
                              <input className="form-control" />
                          </div>
                          <ul>
                              <li>
                                  <div className="icon">1</div>
                                  <div className="name">Bulbasaur</div>
                                  <div className="types">Grass Poison</div>
                                  <div className="abilities">Overgrow Chlorophyll</div>
                                  <div className="stat">45</div>
                                  <div className="stat">49</div>
                                  <div className="stat">49</div>
                                  <div className="stat">65</div>
                                  <div className="stat">65</div>
                                  <div className="stat">45</div>
                                  <div className="stat">318</div>
                              </li>
                          </ul>
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