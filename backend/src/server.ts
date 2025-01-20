import dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';
import express from 'express';
import { apiRouter } from './routes/api';
import { Request, Response } from 'express';
import { db } from '@config/database';
import cors from 'cors';
import cookieParser from 'cookie-parser';

db.initialize()
    .then(() => {
        console.log('DB has been initialized!');
    })
    .catch((err) => {
        console.error('Error during DB initialization:', err);
    });

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
};

const PORT = parseInt(process.env.PORT || '8080');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter);

app.get('/', (_req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
