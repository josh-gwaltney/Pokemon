class System {
    constructor (name) {
        this.name = name;
    }

    update(dt) {
        throw new Error('Method update() called from System base class');
    }
}