require('dotenv').config();
const env = process.env
    , knex = {
    "client": "pg",
    "debug": env.DB_DEBUG && env.DB_DEBUG === true,
    "connection": {
        "host": env.DB_HOST,
        "database": env.DB,
        "user": env.DB_USER,
        "port": env.DB_PORT,
        "password": env.DB_PW,
    },
    "pool": {
        "min": 4,
        "max": 10
    }
};

const host = process.env.HOST || 9777
    , port = process.env.PORT // "xprs" in T9
    , siteUrl = `${host}:${port}`;

module.exports = {
    host,
    port,
    siteUrl,
    knex,
};