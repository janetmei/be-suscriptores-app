import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => { res.send('Obtener todos los usuarios'); });

userRouter.get('/:id', (req, res) => { res.send('Obtener detalles del usuario'); });

userRouter.post('/', (req, res) => { res.send('crear nuevo usuario'); });

userRouter.put('/:id', (req, res) => { res.send('Actualizar usuario'); });

userRouter.delete('/:id', (req, res) => { res.send('Eliminar usuario'); });

export default userRouter;
