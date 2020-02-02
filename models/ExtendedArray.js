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
        if (this.limit && this.limit <= 0) {
            // if this.limit is undefined or -1, ignore limits
            this.push(item); 
        }
        else if(this.limit && this.length < this.limit) {
            // TODO: check for duplicates
            this.push(item);
        }
        else {
            throw `Can't add items to array. [${this.length} of ${this.limit || 'Unknown limit'}]`;
        }
    }

    checkForDuplicate(guid) {
        return this.limit.find(k => k.guid === guid) > 0;
    }

    deleteItem(item) {
        // do the logics
    }
}

module.exports = ExtendedArray;
