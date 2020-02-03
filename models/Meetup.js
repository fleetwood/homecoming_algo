const RankedItem = require('./RankedItem')
    , ExtendedArray = require('./ExtendedArray')
    , data = require('./data/meetups.json')
    , instructors = require('./data/instructors.json');

class Meetup extends RankedItem {
    constructor(...args) {
        super({
            ...args,
            required: {
                type: Meetup.TypesArray.randomItem(),
                timeslot: {},
                instructor: {},
                attendees: new ExtendedArray(10, [])
            }
        });
    }

    addAttendee(val){
        if(!this._attendees.checkForDuplicates(val.guid)){
            this._attendees.addItem(val);
            return true;
        }
        return false;
    }

    removeAttendee(index){
        this._attendees.deleteItem(index);
    }

    get timeslot() {
        return this._timeslot;
    }

    set timeslot(val){
        this._timeslot = val;
    }

    checkInstructor(obj) {
        if(!instructors.find(x => x === obj)){
            return false
        }
        return true;
    }

    get instructor(){
        return this._instructor;
    }

    set instructor(obj){
        if(this.checkInstructor(obj)){
            this.instructor = obj;
            return true;
        }
        return false;
    }

    get capacity(){
        return this._capacity;
    }

    set capacity(val){
        this._capacity = val;
    }

    static get Types() {
        return {
            Bike: 'Bike',
            Tread: 'Tread',
            Yoga: 'Yoga',
            Panel: 'Panel'
        }
    }

    // NOTE:
    // makes for a cleaner reference later
    // this is called a wrapper method, or 
    // helper method 
    static get TypesArray() {
        return [
            Meetup.Types.Bike,
            Meetup.Types.Tread,
            Meetup.Types.Yoga,
            Meetup.Types.Panel
        ];
    }

    // NOTE:
    // you can find .random() and .randomItem() in
    // the utils/index.js file. 
    static mocks(slots, instructors) {
        return data.map(m => new Meetup({
                timeslot: slots.randomItem(),
                instructor: instructors.randomItem(),
                type: Meetup.TypesArray.randomItem(),
                capacity: data.random(5, 10),
                ...m
            }));
    }
    
    static mock(timeslot, instructor) {
        let m = data.random(1);
        return new Meetup({ 
            timeslot,
            instructor,
            type: Meetup.TypesArray.randomItem(),
            ...m
        });
    }
}

module.exports = Meetup;