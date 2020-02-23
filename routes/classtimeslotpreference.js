const classtimeslotpreferences = require('./../models').ClassTimeSlotPreference;

const init = (app) => {
    app.get('/api/classtimeslotpreferences', (req, res) => {
        classtimeslotpreferences.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/classtimeslotpreference/:ctspId', (req, res) => {
        persons.byId(req.params.ctspId)
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