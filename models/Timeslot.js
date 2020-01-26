const PrimaryObject = require('./PrimaryObject')
    , utils = require('./../utils')
    , data = require('./data/timeslots.json');

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
    
    static get mocks() {
        return data.map(item => new Timeslot(item));
    }

    static get mock() {
        return this.mocks.random(1);
    }
}

module.exports = Timeslot;
