const knex = require('./knex')
    , Users = require('./Users')
    , ClassTypePreference = require('./ClassTypePreference');

module.exports = {
    db: knex.db,
    Users,
    ClassTypePreference
}