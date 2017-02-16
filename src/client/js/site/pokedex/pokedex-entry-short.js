import React from 'react';

class PokedexEntryShort extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.value;
    }

    getClassName(){
        let name = this.state.name;
        name = name.toLowerCase();
        name = name.replace(" ", "");
        name = name.replace("-", "");
        return "sprite small " + name;
    }

    render(){
        return (
            <div className="pokemon" onClick={ () => this.props.onClick() }>
                <div className="icon">
                    <div className={ this.getClassName() }></div>
                </div>
                <div className="name">{ this.state.id} { this.state.name }</div>
                <div className="types">
                    <div className={ this.state.types[0].toString().toLowerCase() }>{ this.state.types[0] }</div>
                    <div className={ this.state.types[1] ? this.state.types[1].toString().toLowerCase() : null }>{ this.state.types[1] }</div>
                </div>
                <div className="abilities">abilities</div>
                <div className="statistics">
                    <div>{ this.state.baseStatistics.hitPoints }</div>
                    <div>{ this.state.baseStatistics.attack }</div>
                    <div>{ this.state.baseStatistics.defense }</div>
                    <div>{ this.state.baseStatistics.specialAttack }</div>
                    <div>{ this.state.baseStatistics.specialDefense }</div>
                    <div>{ this.state.baseStatistics.speed }</div>
                    <div>{ this.state.baseStatistics.total }</div>
                </div>
            </div>
        );
    }
}

export default PokedexEntryShort;