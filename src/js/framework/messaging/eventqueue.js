class EventQueue {

    constructor(){
        this._time = 0;
        this._events = [];
        this._eventTimes = [];
    }

    get time(){
        return this._time;
    }

    clear(){
        this._events = [];
        this._eventTimes = [];
    }

    enqueue(event, time){
        let idx = this._events.length;
        for(let i = 0; i < this._eventTimes.length; i++){
            if(this._eventTimes[i] > time){
                idx = i;
                break;
            }
        }

        this._events.splice(idx, 0, event);
        this._eventTimes.splice(idx, 0, time);
    }

    dequeue(){
        if(!this._events.length){
            return null;
        }

        let time = this._eventTimes.splice(0, 1)[0];
        if(time > 0){
            this._time += time;
            for(let idx = 0; idx < this._eventTimes.length; idx++){
                this._eventTimes[idx] -= time;
            }
        }

        return this._events.splice(0, 1)[0];
    }

    remove(event){
        let idx = this._events.indexOf(event);
        if(idx == -1){
            return false;
        }
        this._remove(idx);
        return true;
    }

    _remove(idx){
        this._events.splice(idx, 1);
        this._eventTimes.splice(idx, 1);
    }
}