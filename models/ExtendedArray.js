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
        if (this._limit && this._limit >= 0) {
            // if this.limit is undefined or -1, ignore limits
            this.push(item); 
        }
        else if(this.length < this.limit) {
            // check for duplicates
            this.push(item);
        }
        else {
            throw `Can't add items to array. [${this.length} of ${this.limit || 'Unknown limit'}]`;
        }
    }

    deleteItem(item) {
        // do the logics
    }
}

module.exports = ExtendedArray;
