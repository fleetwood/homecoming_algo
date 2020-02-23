const userinstructorpreferences = require('./../models').UserInstructorPreferences;

const init = (app) => {
    app.get('/api/userinstructorpreferences', (req, res) => {
      userinstructorpreferences.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/userinstructorpreference/:uipId', (req, res) => {
      userinstructorpreferences.byId(req.params.uipId)
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