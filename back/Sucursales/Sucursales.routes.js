import { Router } from 'express';
import { add, getAll, getOne, remove, update } from './Sucursal.controllers.js';

export const routerSuc = Router();

routerSuc.get('/', getAll);
routerSuc.get('/:id', getOne);
routerSuc.post('/', add);
routerSuc.put('/:id', update);
routerSuc.delete('/:id', remove);
