const users = require('./../models').Users;

const init = (app) => {
    app.get('/api/users', (req, res) => {
        users.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/users/:email', (req, res) => {
        users.byEmail(req.params.email)
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