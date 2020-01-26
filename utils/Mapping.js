class Mapping {
    constructor(...args) {
        for (const [k, v] of Object.entries(args[0])) {
            this[k] = v;
        }
    }

    get instructors() {
        return this._instructors;
    }

    set instructors(val) {
        this._instructors = val;
    }
}

module.exports = Mapping;