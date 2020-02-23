const users = require('./users');

const init = (app) => {
    users.init(app);
}

module.exports = {
    init
}