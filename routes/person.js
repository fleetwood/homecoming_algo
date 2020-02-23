const persons = require('./../models').Persons;

const init = (app) => {
    app.get('/api/persons', (req, res) => {
        persons.all()
            .then(data => {
                res.send(data);
            })
            .catch(e => {
                res.send({ status: 500, error: e });
            });
    });
    app.get('/api/person/:personId', (req, res) => {
        persons.byId(req.params.personId)
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