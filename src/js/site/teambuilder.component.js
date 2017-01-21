class TeamBuilderComponent extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <PokemonComponent />
    }

}

ReactDOM.render(
    <TeamBuilderComponent />,
    document.getElementById('team-builder')
);