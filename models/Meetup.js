const PrimaryObject = require('./PrimaryObject').default;

class Meetup extends PrimaryObject {
    constructor(args) {
        super(args);
        this._timeslots = args.timeslots;
        this._instructor = args.instructor;
    }

    get timeslots() {
        return this._timeslots;
    }

    set timeslots(val){
        this._timeslots = val;
    }

    static get Types() {
        return {
            Bike: 'Bike',
            Tread: 'Tread',
            Yoga: 'Yoga',
            Panel: 'Panel'
        }
    } 

    get instructors(){
        return this._instructors;
    }

    set instructors(val){
        this._instructors = val;
    }
}

module.exports = Meetup;