const PrimaryObject = require('./PrimaryObject');
const Instructor = require('./Instructor');
const data = require('./data/instructors.json');

class Meetup extends PrimaryObject {
    constructor(args) {
        super(args);
        this._timeslot = args.timeslot;
        this._instructor = args.instructor;
        this._title = args.title;
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

    get title(){
        return this._title;
    }

    set title(val){
        this._title = val;
    }

    static get mocks(){
        let mockMeetups = [];
        let mockInstructor = Instructor.mocks[0];
    }
}

module.exports = Meetup;