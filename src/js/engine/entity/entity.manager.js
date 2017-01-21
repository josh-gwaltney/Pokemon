class EntityManager {
    constructor(){
        this._entities = [];
    }

    createEntity(){
        let id = Guid.create();
        let entity = new Entity(id);
        this._entities.push(entity);
        return id;
    }

    removeEntity(id){
        let idx = this._entities.indexOf(id);
        if(idx > -1){
            this._entities.splice(idx, 1);
            return true;
        }

        return false;
    }
}
