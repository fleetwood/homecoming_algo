const config = require('./../config');
var knex = require('knex')(config.knex);

knex.on('query', function( queryData ) {
    let sql = queryData.sql;
    queryData.bindings.forEach(b => sql.replace('?',b));
    if (config.knex.debug === true) {
        console.log(sql);
    }
});

module.exports = {
    db: knex
}