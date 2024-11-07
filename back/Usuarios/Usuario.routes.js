import { Router } from 'express';
import { add, getAll, getAllLevel, getByDNI, remove, update } from './Usuario.controllers.js';

export const routerUsu = Router();

routerUsu.get('/', getAll);
routerUsu.get('/:level', getAllLevel);
routerUsu.get('/:dni', getByDNI);
routerUsu.post('/', add);
routerUsu.put('/:id', update);
routerUsu.delete('/:id', remove);
