class MoveComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return (
            <input type="text" className="form-control" onClick={ () => alert('test') } />
        );
    }
}

