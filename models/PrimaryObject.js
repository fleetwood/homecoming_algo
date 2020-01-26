const Utils = require('./../utils');

class PrimaryObject {
    constructor(args) {
        this._ranking = args.ranking;
        this._guid = Utils.generateGuid('AA-99999');
    }
    
    get guid() {
        return this._guid;
    }

    get ranking() {
        return this._ranking;
    }
    set ranking(val) {
        this._ranking = val;
    }
}

module.exports = PrimaryObject;
