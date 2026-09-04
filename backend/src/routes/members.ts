import { Router } from 'express';
import { getMembers, getMemberById } from '../controllers/membersController';

export const membersRouter = Router();

membersRouter.get('/', getMembers);
membersRouter.get('/:id', getMemberById);
