const userattendancepreferences = require('./../models').UserAttendancePreferences;

const init = (app) => {
    app.get('/api/userattendancepreferences', (req, res) => {
        userattendancepreferences.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/userattendancepreference/:ucapId', (req, res) => {
        userattendancepreferences.byId(req.params.ucapId)
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