class PokedexEntryShort extends React.Component {
    constructor(){
        super();
        this.props = {
            value: null
        };
    }

    render(){
        return (
            <div className="pokemon">
                <div className="icon">icon</div>
                <div className="name">{ this.props.value.name }</div>
                <div className={this.props.value.types[1].toLowerCase()}>{ this.props.value.types[1] }</div>
                <div className="abilities">abilities</div>
                <div className="statistics">{ this.props.value.baseStatistics }</div>
            </div>
        );
    }
}