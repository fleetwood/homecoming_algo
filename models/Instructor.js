const Meetup = require('./Meetup');
import PrimaryObject from './PrimaryObject';

export class Instructor extends PrimaryObject {
    constructor(args) {
        super()
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