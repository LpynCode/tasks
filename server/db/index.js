const { Pool } = require('pg');

require('dotenv').config();

const getPool = () => (new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: String(process.env.DB_PASSWORD),
    port: Number(process.env.DB_PORT) || 5432
}))

module.exports = { getPool }