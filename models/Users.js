const knex = require('./knex');

const all = () => new Promise((resolve, reject) => {
    return knex.db
        .select('*')
        .from('User')
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

const byEmail = (emailAddress) => new Promise((resolve, reject) => {
   return knex.db
        .select('*')
        .from('User')
        .where({email: emailAddress})
        .then(results => {
            resolve(results);
        })
        .catch(e => {
            reject(e);
        });
});

module.exports = {
    all,
    byEmail
}