const RankedItem = require('./RankedItem')
    , data = require('./data/meetups.json');

class Meetup extends RankedItem {
    constructor(...args) {
        super({
            ...args,
            required: {
                type: Meetup.TypesArray.randomItem(),
                timeslot: {},
                instructor: {},
                capacity: Number,
            }
        });

        this._attendees = args.attendees || [];
    }

    get attendees(){
        return this._attendees;
    }

    addAttendees(val){
        if(this._attendees.length - 1 < capacity){
            this._attendees.push(val);
        } else {
            throw "Meetup is at capacity."; 
        }
    }

    removeAttendee(index){
        if(index > -1){
            this._attendees.splice(index, 1);
        }
    }

    removeAllAttendees(){
       this._attendees.length = 0; 
    }

    get timeslot() {
        return this._timeslot;
    }

    set timeslot(val){
        this._timeslot = val;
    }

    get instructor(){
        return this._instructor;
    }

    set instructor(val){
        this._instructor = val;
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