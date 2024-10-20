import postgres from 'postgres';

// Access environment variable directly from process.env
const connectionString = process.env.PGCONNECT || process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error('Missing database connection string!');
}

const sql = postgres(connectionString, {});

export default sql;