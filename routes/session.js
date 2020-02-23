const sessions = require('./../models').Sessions;

const init = (app) => {
    app.get('/api/sessions', (req, res) => {
        sessions.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/session/:sessionId', (req, res) => {
        sessions.byId(req.params.sessionId)
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