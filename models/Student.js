import PrimaryObject from './PrimaryObject';

class Student extends PrimaryObject {
  constructor(args){
    super()
    this.name = arg.name;
    this.meetups = arg.meetups;
    this.preferences = arg.preferences;
  }
    // name
    get name(){
      return this.name;
    }

    set name(val){
      this._name = val;
    }
    // meetups
    get meetups(){
      return this.meetups;
    }

    set meetups(val){
      this._meetups = val;
    }
    // preferences
    get preferences(){
      return this.preferences;
    }

    set preferences(val){
      this._preferences = val;
    }
}