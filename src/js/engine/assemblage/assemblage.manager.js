class AssemblageManager {
    constructor(){
        this._assemblageTemplates = {};
    }

    addAssemblageTemplate(id, assemblage){
        this._assemblageTemplates[id] = assemblage;
    }

    removeAssemblageTemplate(id){
        delete this._assemblageTemplates[id];
    }

    getAssemblageTemplate(id){
        if(!(id in this._assemblageTemplates)){
            throw new Error('Assemblage template' + id + ' does not exist');
        }
        return this._assemblageTemplates[id];
    }
}
