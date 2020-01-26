const Meetup = require('./Meetup');
const PrimaryObject = require('./PrimaryObject');

class Instructor extends PrimaryObject {
    constructor(args) {
        super(args);
        this._name = args.name;
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get slots() {
        return this._slots;
    }
    set slots(val) {
        this._slots = val;
    }
    
}

module.exports = Instructor;
