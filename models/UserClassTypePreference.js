const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('UserClassTypePreference')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byId = (uctpId) => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('UserClassTypePreference')
        .where({ userId: uctpId })
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