class ComponentManager {
    constructor(){
        this._componentTemplates = {};
    }

    addComponentTemplate(id, defaultState){
        this._componentTemplates[id] = defaultState;
    }

    removeComponentTemplate(id){
        delete this._componentTemplates[id];
    }

    createComponent(id, entityId, newState){
        let template = this.getComponentTemplate(id);
        let component = new Component(id, entityId, template);
        if(newState){
            component.update(newState);
        }
        return component;
    }

    getComponentTemplate(id){
        if(!this._componentTemplates[id]){
            throw new Error('Component template ' + id + ' does not exist.');
        }
        return this._componentTemplates[id];
    }

    getComponentList(){

    }
}
