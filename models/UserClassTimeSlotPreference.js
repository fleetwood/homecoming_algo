const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('UserClassTimeSlotPreference')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byId = (uctspId) => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('UserClassTimeSlotPreference')
        .where({ userId: uctspId })
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