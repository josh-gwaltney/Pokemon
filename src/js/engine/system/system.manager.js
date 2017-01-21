class SystemManager {
    constructor(){
        this.systems = {};
    }

    addSystem(id, system){
        this.systems[id] = system;
    }

    removeSystem(id){
        delete this.systems[id];
    }

    getSystem(id){
        return this.systems[id];
    }
}