import postgres from 'postgres';
import { PGCONNECT } from '$env/static/private'; 

if (!PGCONNECT) {
    throw new Error('Missing database connection string!');
}

const sql = postgres(PGCONNECT, {});

export default sql;


