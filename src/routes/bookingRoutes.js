import {Router} from 'express';
import { bookingsController } from "../controllers/bookingController.js";


const router = Router();


router.get('/', bookingsController.getBookings);

//router.get('/:id', productController.checkProductExist, productController.getProducts);

router.post('/add', bookingsController.checkAddBooking, bookingsController.checkBookingPay, bookingsController.addBooking);

router.put('/update/:id', bookingsController.updateProduct);

router.delete('/delete/:id', bookingsController.delete);


export default router;