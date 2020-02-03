
const isUndefined = (type) => {
    return (typeof type === 'undefined');
}

if (isUndefined(Array.random)) {
    /**
     * @param {string} prop Optional. If none set, a random number will be selected.
     */
    Object.defineProperty(Array.prototype, 'random', {
        value(prop = 0) {
            let temp = [] // placeholder
                , source = JSON.parse(JSON.stringify(this)); // bc we don't want to modify this
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

if (isUndefined(Array.randomItem)) {
    Object.defineProperty(Array.prototype, 'randomItem', {
        value() {
            // grabs the first item from random array 
            return this.random(1)[0];
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

/**
 * 
 * @param {Array} list The current list to compare to
 * @param {Array} constraints The properties to check against
 * @param {Object} item The object being added to the list
 */
const checkConstraints = (list, constraints, item) => {
    let res = false;
    list.forEach(l => {
        if (l === item) {
            res = true;
            return;
        }
        constraints.forEach(c => {
            // console.log(`Checking ${c} : ${l[c] || 'null'} ?== ${item[c] || 'null'}`);
            if (l[c] && item[c] && l[c] === item[c]) {
                res = true;
                return;
            }
        });
    });
    return res;
}

const trace = (item) => {
    console.log(JSON.stringify(item, null, 2));
};

module.exports = {
    isUndefined,
    random,
    checkConstraints,
    generateGuid,
    trace
};
