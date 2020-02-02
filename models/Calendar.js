const utils = require('./../utils')

class Calendar {
    /**
     * 
     * @param {Array} args Add any constraints by property.
     * @example {constraints: ['guid', 'firstName']}
     */
    constructor(args) {
        this.items=[];
        this.constraints = args && args.constraints ? args.constraints : [];
    }

    get items () {
       return this._items;
    }
    set items (items) {
       this._items = items;
    }
    
    addItem(item) {
        if (!utils.checkConstraints(this.items, this.constraints, item)) {
            this._items.push(item);
            return true;
        }
        return false;
    }

    addItems(...args) {
        let res = [];
        for(var item in args) {
            if (!this.addItem(args[item])) {
                res.push(args[item]);
            };
        }
        return res;
    }
}

module.exports = Calendar;