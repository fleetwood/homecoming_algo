const models = require('../models')
    , utils = require('.');

class Scheduler {
    constructor() {
        this.instructors = models.Instructor.mocks;
        this.timeslots = models.Timeslot.mocks;
        this.meetups = models.Meetup.mocks(this.timeslots, this.instructors);
        this.students = models.Student.mocks(this.timeslots, this.instructors);
    }

    get instructors() {
        return this._instructors;
    }

    set instructors(val) {
        this._instructors = val;
    }

    get timeslots() {
        return this._timeslots;
    }

    set timeslots(val) {
        this._timeslots = val;
    }

    get meetups() {
        return this._meetups;
    }

    set meetups(val) {
        this._meetups = val;
    }

    get students() {
        return this._students;
    }

    set students(val) {
        this._students = val;
    }
}

module.exports = Scheduler;