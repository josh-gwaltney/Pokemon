class ImageCache {
    constructor(){
        this._data = {};
    }

    addToCache(name, src){
        let self = this;
        let img = new Image();
        img.src = src;
        self._data[name] = img;
    }

    getImage(name){
        return this._data[name];
    }
}