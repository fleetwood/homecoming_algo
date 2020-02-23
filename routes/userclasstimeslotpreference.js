const userclasstimeslotpreferences = require('./../models').UserClassTimeSlotPreferences;

const init = (app) => {
    app.get('/api/userclasstimeslotpreferences', (req, res) => {
        userclasstimeslotpreferences.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/userclasstimeslotpreference/:uctspId', (req, res) => {
        userclasstimeslotpreferences.byId(req.params.uctspId)
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