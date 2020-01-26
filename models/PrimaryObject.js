class PrimaryObject {
    constructor(args) {
        this._ranking = args.ranking;
        this._guid = this.generateGuid();
    }

    /**
     * @param {Number} x
     * @param {Number} y
     * @description y must be greater than x
     */
    random = (x = 0, y = 9) => {
        return Math.floor(Math.random() * (y - x) + x);
    };

    generateGuid = (salt = 'XXXXXX-99999-XXXXXX', lower = true) => {
        let sep = salt.match(/[^0-9a-zA-Z\d\s:]/);
        sep = sep && sep[0] ? sep[0] : '-';
        const vals = salt.split(sep)
            , alpha = (lower ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
            , pad = (val, len) => {
                let res = val.toString();
                while (res.length < len) {
                    res = `0${res}`;
                }
                return res;
            };
        return vals.map(r =>
            isNaN(r)
                ? r.split('').map(rm => alpha[random(0, alpha.length)]).join('')
                : pad(this.random(0, r), r.toString().length)
        ).join(sep);
    };
    
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
