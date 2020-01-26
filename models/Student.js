const PrimaryObject = require('./PrimaryObject')
    , utils = require('./../utils')
    , data = require('./data/students.json');

class Student extends PrimaryObject {
  constructor(args){
    super(args);
    this._name = args.name;
    this._meetups = args.meetups || [];
    this._preferences = args.preferences || [];
  }
    // name
    get name(){
      return this._name;
    }

    set name(val){
      this._name = val;
    }
    // meetups
    get meetups(){
      return this._meetups;
    }

    set meetups(val){
      this._meetups = val;
    }
    // preferences
    get preferences(){
      return this._preferences;
    }

    set preferences(val){
      this._preferences = val;
    }

    static get mocks() {
        return data.map(m => {
          m.preferences = {
            timeslots: require('./Timeslot').mocks.random(),
            instructors: require('./Instructor').mocks.random()
          };
          return new Student(m);
      });
    }

    static get mock() {
        return this.mocks.random(1);
    }
}

module.exports = Student;
