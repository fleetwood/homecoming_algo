const RankedItem = require('./RankedItem')
  , data = require('./data/students.json');

class Student extends RankedItem {
  constructor(...args) {
    // NOTE:
    // omg what does required do???
    // check out the constructor in RankedItem
    super({
      ...args,
      required:{
        meetups: [],
        preferences: []
      }
    });
  }
  
  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }
  
  get meetups() {
    return this._meetups;
  }

  set meetups(val) {
    this._meetups = val;
  }
  
  get preferences() {
    return this._preferences;
  }

  set preferences(val) {
    this._preferences = val;
  }

  static mocks(slots, instructors) {
    return data.map(m => new Student({
        preferences: {
          timeslots: require('./Timeslot').mocks.random(),
          instructors: require('./Instructor').mocks.random()
        },
        ...m
    }));
  }

  static mock(timeslots, instructors) {
    return this.mocks(timeslots.random(), instructors.random()).random(1)[0];
  }
}

module.exports = Student;
