import {Router} from 'express';
import bookingRoutes from './bookingRoutes.js';

const router = Router();

router.use('/booking', bookingRoutes);

export default router;