class GameManager {
    constructor(){
        this._entityManager = new EntityManager();
        this._componentManager = new ComponentManager();
        this._assemblageManager = new AssemblageManager();
        this._entityComponentData = {};
    }

    init(config){

        // add component templates
        let components = config.components;
        for(let component in components){
            this._componentManager.addComponentTemplate(component.id, component);
        }

        // add assemblage templates
        let assemblages = config.assemblages;
        for(let assemblage in assemblages){
            this._assemblageManager.addAssemblageTemplate(assemblage.id, assemblage);
        }

        // add systems
    }

    addComponentToEntity(componentId, entityId, state){
        let component = this._componentManager.createComponent(componentId, entityId, state);
        this._entityComponentData[componentId][entityId] = component;
    }

    addComponentsToEntity(componentIds, entityId){
        for (let idx in componentIds){
            let component = componentIds[idx];
            this.addComponentToEntity(component, entityId);
        }
    }

    removeComponentFromEntity(componentId, entityId){
        if(this._entityComponentData[componentId]){
            if(this._entityComponentData[componentId][entityId]){
                delete this._entityComponentData[componentId][entityId];
            }
        }
    }

    removeComponentsForEntity(componentIds, entityId){

    }

    getComponentData(componentId){
        return this._entityComponentData[componentId];
    }

    getComponentDataForEntity(componentId, entityId){
        return this._entityComponentData[componentId][entityId];
    }

    updateComponentDataForEntity(componentId, entityId, newState){
        let component = this.getComponentDataForEntity(componentId, entityId);
        component.update(newState);
    }

    createEntityFromAssemblage(id){
        let assemblageTemplate = this._assemblageManager.getAssemblageTemplate(id);
        let entityId = this._entityManager.createEntity();

        for (let component in assemblageTemplate.defaults){
            let state = assemblageTemplate.defaults[component];
            this.updateComponentDataForEntity(component, entityId, state);
        }
    }

}
