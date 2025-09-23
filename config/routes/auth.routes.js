import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up' , (req, res) => { res.send('Registrarse')});
authRouter.post('/sign-in' , (req, res) => { res.send('Sesión Iniciada')});
authRouter.post('/sign-out' , (req, res) => { res.send('Sesión Cerrada')});

export default authRouter;