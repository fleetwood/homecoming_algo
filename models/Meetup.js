const PrimaryObject = require('./PrimaryObject');

class Meetup extends PrimaryObject {
    constructor(args) {
        super(args);
        this._timeslots = args.timeslots;
        this._instructor = args.instructor;
    }

    get timeslots() {
        return this._timeslots;
    }

    static get Types() {
        return {
            Bike: 'Bike',
            Tread: 'Tread',
            Yoga: 'Yoga',
            Panel: 'Panel'
        }
    } 

    // timeslots
    // instructor
}

export default Meetup;