const RankedItem = require('./RankedItem')
  , ExtendedArray = require('./ExtendedArray')
  , MeetupPreference = require('./MeetupPreference')
  , data = require('./data/students.json');

class Student extends RankedItem {
  constructor(...args) {
    super({
      ...args,
      required: {
        meetups: new ExtendedArray(-1, []),
        preferences: new ExtendedArray(-1, [])
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

  addMeetup(val) {
    this._meetups.addItem(val);
  }

  removeMeetup(val) {
    this._meetups.removeItem(val);
  }

  get preferences() {
    return this._preferences;
  }

  set preferences(val) {
    this._preferences = val;
  }

  addPreference(val) {
    this._preferences.addItem(val);
  }

  removePreference(val) {
    this._preferences.removeItem(val);
  }

  static get mocks() {
    return data.map(m => new Student({
      preferences: MeetupPreference.mocks,
      ...m
    }));
  }

  static get mock() {
    return data.map(m => new Student({
      preferences: MeetupPreference.mocks,
      ...m
    }))
      .randomItem();
  }
}

module.exports = Student;
