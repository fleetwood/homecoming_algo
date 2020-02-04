const utils = require('./../utils')
    , RankedItem = require('./RankedItem')
    , Instructor = require('./Instructor')
    , Timeslot = require('./Timeslot');

class MeetupPreference extends RankedItem {
    constructor(args) {
        super(args);
    }

    get instructor() {
        return this._instructor;
    }
    set instructor(val) {
        this._instructor = val;
    }

    get timeslot() {
        return this._timeslot;
    }
    set timeslot(val) {
        this._timeslot = val;
    }

    static get mocks() {
        let m = [];
        for (var i = 0; i < utils.random(0, 10); i++) {
            m.push(MeetupPreference.mock);
        }
        return m;
    }

    static get mock() {
        return new MeetupPreference({
            timeslot: Timeslot.mock,
            instructor: Instructor.mock
        });
    }
}

module.exports = MeetupPreference;