import { Router } from 'express';
import { add, getAll, getOne, remove, update } from './Cliente.controllers.js';

export const routerCli = Router();

routerCli.get('/', getAll);
routerCli.get('/:id', getOne);
routerCli.post('/', add);
routerCli.patch('/:id', update);
routerCli.delete('/:id', remove);
