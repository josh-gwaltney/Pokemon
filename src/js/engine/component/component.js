class Component {
    constructor (id, entityId, state) {
        if (state === null){
            throw new Error('Component state cannot be null');
        }

        this._id = id;
        this._entityId = entityId;
        this._state = state;
    };

    get id(){
        return this._id;
    }

    get entityId(){
        return this._entityId;
    }

    get state(){
        return this._state;
    }

    update(newState){
        for(let key in this._state){
            if(this._state.hasOwnProperty(key) && newState.hasOwnProperty(key)){
                this._state[key] = newState[key];
            }
        }
    }
}