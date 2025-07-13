import { Pool } from 'pg';

let pool;

async function connectToDatabase() {
  try {
    if (!pool) {
      pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
        ssl: {
          rejectUnauthorized: false
        },
        connectionTimeoutMillis: 10000,
      });
    }

    // Test the connection
    const client = await pool.connect();
    console.log('Postgres connected successfully');
    client.release();

    return pool;
  } catch (error) {
    console.error('Error connecting to Postgres:', error);
    throw error;
  }
}

export {
  connectToDatabase
};