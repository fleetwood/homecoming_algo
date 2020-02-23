const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('Session')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byId = (sessionId) => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('Session')
        .where({ id: sessionId })
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

module.exports = {
    all,
    byId
}