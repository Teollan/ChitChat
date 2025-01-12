import 'reflect-metadata';
import dotenv from 'dotenv';

import express, { Request, Response } from 'express';
import { db } from '@/services/db';
import { User } from '@/entities/userEntity';

dotenv.config();

const PORT = parseInt(process.env.PORT || '8080');

db.initialize()
    .then(() => {
        console.log('DB has been initialized!');
    })
    .catch((err) => {
        console.error('Error during DB initialization:', err);
    });

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
    res.send('Express + TypeScript Server + more watch');
});

// register routes
app.get('/users', async function (_: Request, res: Response) {
    const users = await db.getRepository(User).find();
    res.json(users);
});

app.get('/users/:id', async function (req: Request, res: Response) {
    const results = await db.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    });

    res.send(results);
});

app.post('/users', async function (req: Request, res: Response) {
    const user = await db.getRepository(User).create(req.body);
    const results = await db.getRepository(User).save(user);
    res.send(results);
});

app.patch('/users/:id', async function (req: Request, res: Response) {
    const user = await db.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    });

    db.getRepository(User).merge(user!, req.body);
    const results = await db.getRepository(User).save(user!);
    res.send(results);
});

app.delete('/users/:id', async function (req: Request, res: Response) {
    const results = await db.getRepository(User).delete(req.params.id);
    res.send(results);
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
