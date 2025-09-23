import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send('Obtener todas las suscripciones'));

subscriptionRouter.get('/:id', (req, res) => res.send('Obtener detalles de la suscripcion'));

subscriptionRouter.post('/', (req, res) => res.send('Crear una suscripcion'));

subscriptionRouter.put('/:id', (req, res) => res.send('Actualizar suscripcion'));

subscriptionRouter.get('/user/:id', (req, res) => res.send('Obtener todas las suscripciones de ususarios'));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send('Cancelar suscripcion'));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send('Obtener proximas renovaciones'));



export default subscriptionRouter;
