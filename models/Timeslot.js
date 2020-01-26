const PrimaryObject = require('./PrimaryObject');

class Timeslot extends PrimaryObject{
    constructor(args){
        super(args);
        this._time = args.time;
    }
    
    get time(){
        return this._time;
    }

    set time(val){
        this._time = val;
    }
}

module.exports = Timeslot;
