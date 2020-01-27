const RankedItem = require('./RankedItem')
    , data = require('./data/timeslots.json');

class Timeslot extends RankedItem{
    constructor(...args){
        super(args);
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
