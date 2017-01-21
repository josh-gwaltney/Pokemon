class EventQueue2 extends Queue {

    constructor(){
        super();
        this._time = 0;
        this._eventTimes = [];
    }

    get time(){
        return this._time;
    }

    enqueue(event, time){
        //super.enqueue(event);

        let idx = this._data.length;
        for(let i = 0; i < this._eventTimes.length; i++){
            if(this._eventTimes[i] > time){
                idx = i;
                break;
            }
        }

        this._data.splice(idx, 0, event);
        this._eventTimes.splice(idx, 0, time);
    }

    dequeue(){

    }

    clear(){

    }
}