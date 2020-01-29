class ExtendedArray extends Array {
    constructor(limit, ...args) {
        super(...args);
        this._limit = limit;
    }

    get limit() {
      return this._limit;
    }
    
    set limit(val) {
      this._limit = val;
    }

    addItem(item) {
        if(this.length < this.limit) {
            // check for duplicates
            this.push(item);
        } else {
            throw `Can't add anymore items to array. [${this.length} of ${this.limit}]`;
        }
    }

    deleteItem(item) {
        // do the logics
    }
}

module.exports = ExtendedArray;
