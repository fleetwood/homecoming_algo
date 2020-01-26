
const isUndefined = (type) => {
    return (typeof type === 'undefined');
}

if (isUndefined(Array.random)) {
    /**
     * @param {string} prop Optional. Array.RAND.ONE will select one random item.
     * Aray.RAND.MULTI will select the number of items specified.
     * Default to Array.RAND.VARY, which will select a random number of items.
     * @param {Number} Num Number of items to be selected.
     */
    Object.defineProperty(Array.prototype, 'random', {
        value(prop = 0) {
            let temp = [] // placeholder
                , source = this; // bc we don't want to modify this
            prop = prop > 0 ? prop : random(0, this.length -1); // if prop isn't set get random amount
            do {
                let i = random(0, source.length -1 );
                temp.push(source[i]);
                source.splice(i, 1);
                prop--;
            }
            while(source.length > 0 && prop > 0);
            return temp;
        }
    });
}

/**
 * @param {Number} x
 * @param {Number} y
 * @description y must be greater than x
 */
const random = (x = 0, y = 9) => {
    return Math.floor(Math.random() * (y - x) + x);
};

const generateGuid = (salt = 'XXXXXX-99999-XXXXXX', lower = true) => {
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
            : pad(random(0, r), r.toString().length)
    ).join(sep);
};

module.exports = {
    random,
    generateGuid,
    Mapping: require('./Mapping')
};
