const utils = require('../utils');

class RankedItem {
    constructor(args) {
        // iterate through all keys and assign them to properties!
        // this is shorthand for this._foo = args.foo 
        for (const [k, v] of Object.entries(args[0])) {
            this[k] = v;
        }
        // iterate through required properties passed in args
        // and if that property hasn't been set, set it to the
        // value provided.  Neat huh?
        if (args.required) {
            for (const [k, v] of Object.entries(args.required)) {
                this[k] = this[k] || v;
            }
        }
        this._guid = utils.generateGuid('9999999');
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

module.exports = RankedItem;
