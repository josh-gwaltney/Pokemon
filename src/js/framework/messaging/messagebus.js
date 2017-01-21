class MessageBus {

    constructor(){
        this._subscribers = {};
    }

    subscribe(msg, sub){
        if(!(msg in this._subscribers)){
            this._subscribers[msg] = [];
        }

        this._subscribers[msg].push
    }

    unsubscribe(msg, sub){

    }

    publish(msg){
        let subject = msg.subject;
        let subs = this._subscribers[subject];

        subs.forEach((o) => {
            o.handle(msg);
        });
    }

    _hasSubscriber(msg, sub){

    }

}