import postgres from 'postgres';

// Use environment variables directly from process.env
const PGCONNECT = process.env.PGCONNECT || process.env.DATABASE_URL;

if (!PGCONNECT) {
    throw new Error('Missing database connection string!');
}

const sql = postgres(PGCONNECT, {});

export default sql;