const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('UserInstructorPreference')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byId = (uipId) => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('UserInstructorPreference')
        .where({ userId: uipId })
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