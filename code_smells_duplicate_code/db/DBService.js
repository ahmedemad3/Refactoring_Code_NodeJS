const { Pool } = require('pg');

const pool = new Pool({
  user: 'db_user',
  host: 'localhost',
  database: 'my_database',
  password: 'password',
  port: 5432,
});

async function executeQuery(query, values) {
  const client = await pool.connect();
  try {
    await client.query(query, values);
  } finally {
    client.release();
  }
}

module.exports = executeQuery;