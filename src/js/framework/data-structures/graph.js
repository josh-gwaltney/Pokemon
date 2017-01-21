class Graph{

    constructor(){
        this._verticies = [];
        this._edges = [];
    }

    addVertex(v){
        this._verticies.push(v);
        this._edges[v] = [];
    }
}