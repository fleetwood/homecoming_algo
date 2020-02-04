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

    get contents() {
        return this;
    }

    addItem(item) {
        if (this.limit && this.limit <= 0) {
            this.push(item); 
        }
        else if(this.limit && this.length < this.limit) {
            this.push(item);
        }
        else {
            throw `Can't add items to array. [${this.length} of ${this.limit || 'Unknown limit'}]`;
        }
    }

    checkForDuplicate(guid) {
        return this.find(k => k.guid === guid) > 0;
    }

    deleteItem(index) {
        let removed = this.splice(index, 1);
        return this;
    }
}

module.exports = ExtendedArray;
