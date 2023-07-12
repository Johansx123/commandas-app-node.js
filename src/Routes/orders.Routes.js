import {Router} from 'express';
import { getOrders, recallOrders, getOrdersday,getOrder } from '../Controller/orders.Controller.js';

const router = Router();
router.get('/api/orders', getOrders);
router.get('/api/orders/date/:ordertime',getOrdersday)
router.get('/api/orders/:id',getOrder)
router.post('/api/orders', recallOrders);

export default router