const Meetup = require('./Meetup');

export class Instructor {
    constructor(args) {
        this._name = args.name;
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get rank() {
        return this._name;
    }
    set rank(val) {
        this._name = val;
    }
    get slots() {
        return this._slots;
    }
    set slots(val) {
        this._slots = val;
    }
    get slots() {
        return this._slots;
    }
    set slots(val) {
        this._slots = val;
    }
}