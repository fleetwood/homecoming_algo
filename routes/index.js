const routes = [
    require('./users'),
    require('./person')
];

const init = (app) => routes.forEach(r => r.init(app));

module.exports = {
    init
}