import {Router} from 'express';
import { bookingsController } from "../controllers/bookingController.js";
import validatePay from '../validators/pay.js';
import validateCreate from '../validators/bookings.js';


const router = Router();


router.get('/', bookingsController.getBookings);

router.get('/:id', bookingsController.getBookingById);

router.post('/add', validateCreate, bookingsController.checkBookingPay, bookingsController.addBooking);

router.put('/payBooking/:id', validatePay, bookingsController.checkBookingPay, bookingsController.payBooking);

router.delete('/cancel/:id', bookingsController.cancelBooking);


export default router;