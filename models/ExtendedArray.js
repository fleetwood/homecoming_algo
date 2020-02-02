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
<<<<<<< HEAD
        if (this.limit && this.limit <= 0) {
=======
        if (this._limit && this._limit >= 0) {
>>>>>>> beaa9ec69d6da70c079e3076bf04cb00a87ca7da
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
