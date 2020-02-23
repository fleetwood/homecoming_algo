const classtypepreferences = require('./../models').ClassTypePreferences;

const init = (app) => {
    app.get('/api/classtypepreferences', (req, res) => {
        classtypepreferences.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/classtypepreference/:ctpId', (req, res) => {
        classtypepreferences.byId(req.params.ctpId)
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
}

module.exports = {
    init
}