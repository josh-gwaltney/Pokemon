class PokedexComponent extends React.Component {
    constructor(){
        super();


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