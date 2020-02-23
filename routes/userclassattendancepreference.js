const userclassattendancepreferences = require('./../models').UserClassAttendancePreferences;

const init = (app) => {
    app.get('/api/userclassattendancepreferences', (req, res) => {
        userclassattendancepreferences.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/userclassattendancepreference/:ucapId', (req, res) => {
        userclassattendancepreferences.byId(req.params.ucapId)
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