import PrimaryObject from './PrimaryObject';

class Student extends PrimaryObject {
  constructor(args){
    super()
    this._name = arg.name;
    this._meetups = arg.meetups;
    this._preferences = arg.preferences;
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
}