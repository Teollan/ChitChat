import { Router, Request, Response } from 'express';
import { db } from '@/services/db';
import { User } from '@/entities/user';

export const usersRouter = Router();

usersRouter.get('/', async function (_: Request, res: Response) {
    const users = await db.getRepository(User).find();

    res.json(users);
});

usersRouter.get('/:id', async function (req: Request, res: Response) {
    const results = await db.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    });

    res.json(results);
});

usersRouter.post('/', async function (req: Request, res: Response) {
    const user = await db.getRepository(User).create(req.body);
    const results = await db.getRepository(User).save(user);

    res.send(results);
});

usersRouter.patch('/:id', async function (req: Request, res: Response) {
    const user = await db.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    });

    db.getRepository(User).merge(user!, req.body);
    const results = await db.getRepository(User).save(user!);
    res.send(results);
});

usersRouter.delete('/:id', async function (req: Request, res: Response) {
    const results = await db.getRepository(User).delete(req.params.id);
    res.send(results);
});
