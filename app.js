import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './config/routes/user.routes.js';
import authRouter from './config/routes/auth.routes.js';
import subscriptionRouter from './config/routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de seguimiento de suscripciones');
});

app.listen(PORT, async() => {
    console.log(`La API de seguimiento de suscripciones se está ejecutando en http://localhost:${PORT}`);
    await  connectToDatabase();
});

export default app;

