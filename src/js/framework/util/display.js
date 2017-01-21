class Display {
    constructor(config){
        this._config = config || {};
        let el = document.createElement('canvas');
        this._context = el.getContext('2d');

        el.width = config.width;
        el.height = config.height;

        let parent = document.getElementById(config.parent);
        parent.appendChild(el);

    }

    get container(){
        return this._context.canvas;
    }

    drawImage(img){

    }
}