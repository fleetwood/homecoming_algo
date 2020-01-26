const PrimaryObject = require('./PrimaryObject')
, utils = require('./../utils')
, data = require('./data/meetups.json');

class Meetup extends PrimaryObject {
    constructor(args) {
        super(args);
        this._timeslot = args.timeslot;
        this._instructor = args.instructor;
    }

    get timeslot() {
        return this._timeslot;
    }

    set timeslot(val){
        this._timeslot = val;
    }

    static get Types() {
        return {
            Bike: 'Bike',
            Tread: 'Tread',
            Yoga: 'Yoga',
            Panel: 'Panel'
        }
    } 

    get instructor(){
        return this._instructor;
    }

    set instructor(val){
        this._instructor = val;
    }

    get mocks() {
        return data.map(m => {
            m.timeslot = require('./Timeslot').mock;
            m.instructor = require('./Instructor').mock;
            return new Meetup(m);
        });
    }
    
    get mock() {
        return this.mocks.random(1);
    }

}

module.exports = Meetup;