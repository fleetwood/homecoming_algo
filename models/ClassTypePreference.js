const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('ClassTypePreference')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byId = (ctpId) => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('ClassTypePreference')
        .where({ id: ctpId })
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