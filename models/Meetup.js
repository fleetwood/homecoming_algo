class Meetup {
    constructor(args) {
        super()
        this._timeslots = args.timeslots;
        this._instructor = args.instructor;
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