import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de seguimiento de suscripciones');
});

app.listen(PORT, () => {
    console.log(`La API de seguimiento de suscripciones se está ejecutando en http://localhost:${PORT}`);
});

export default app;

