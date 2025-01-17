import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import { apiRouter } from './routes/api';
import { Request, Response } from 'express';
import { db } from '@config/database';

dotenv.config();

db.initialize()
    .then(() => {
        console.log('DB has been initialized!');
    })
    .catch((err) => {
        console.error('Error during DB initialization:', err);
    });

const PORT = parseInt(process.env.PORT || '8080');

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (_req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
