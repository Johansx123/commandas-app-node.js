import {Router} from 'express';
import { getOrders, recallOrders } from '../Controller/orders.Controller.js';

const router = Router();
router.get('/api/orders', getOrders);
router.post('/api/orders', recallOrders);
export default router