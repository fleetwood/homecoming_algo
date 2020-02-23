const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('ClassTimeSlotPreference')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byId = (ctspId) => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('ClassTimeSlotPreference')
        .where({ id: ctspId })
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