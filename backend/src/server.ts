import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const PORT = parseInt(process.env.PORT || '8080');

const DB_HOST = process.env.DB_HOST || 'db';
const DB_PORT = parseInt(process.env.DB_PORT || '5432');
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
const DB_NAME = process.env.DB_NAME || 'chitchat_db';

const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

client
    .connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err) => console.error('PostgreSQL connection error', err));

const app: Express = express();

app.get('/', (_req: Request, res: Response) => {
    res.send('Express + TypeScript Server + more watch');
});

app.get('/test-db', async (_req: Request, res: Response) => {
    try {
        const result = await client.query('SELECT NOW()');

        res.json({ success: true, time: result.rows[0].now });
    } catch (err) {
        console.error('Database connection error:', err);
        res.status(500).json({ success: false, error: (err as Error).message });
    }
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
