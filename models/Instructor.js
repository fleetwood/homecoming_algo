const Meetup = require('./Meetup');
const PrimaryObject = require('./PrimaryObject');
const data = require('./data/instructors.json');

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
    static get mocks() {
        return data.map(item => new Instructor(item));
    }
}

module.exports = Instructor;
