const PrimaryObject = require('./RankedItem')
    , data = require('./data/instructors.json');

class Instructor extends PrimaryObject {
    constructor(...args) {
        super(args);
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    
    static get mocks() {
        return data.map(item => new Instructor(item));
    }

    static get mock() {
        return this.mocks.random(1);
    }
}

module.exports = Instructor;
