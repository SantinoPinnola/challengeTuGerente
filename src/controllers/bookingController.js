import { booking } from "../models/booking.models.js";



const tableName = 'booking';

class bookingController {


    async checkBookingPay (req, res, next) {
        if(req.params === '') {
            const {id} = req.params;
            const bookingGet = await booking.findById(id);
            if (bookingGet.status == "Pagado") {
                return res.status(400).json({
                    msg : 'Reserva ya pagada'
                });
            }
        }
        const {price, payMethod,street, streetNumber, codPostal} = req.body;

        if (price && payMethod && street && streetNumber && codPostal) {
            req.body.status = 'Pagado';
        };

        next();
    }

    async getBookings (req, res) {
        const total = await booking.find().lean();
        res.json({ bookings : total });
    };
        
    async getBookingById (req, res) {
        const {id} = req.params;
        const bookingGet = await booking.findById(id).lean();
        res.json({ bookingInfo : bookingGet });
    };

    async addBooking(req, res) {
        console.log('EL BODY', req.body);
        let bookingDone = await booking.create(req.body);
        res.json({
            msg : 'Reserva creada con exito',
            status : bookingDone.status,
            id : bookingDone.id
        })
    }

    async payBooking(req, res) {
        const {id} = req.params;
        let bookingPaid = await booking.findByIdAndUpdate(id, req.body);
        res.json({
            msg : 'Reserva actualizada con exito',
            status : bookingPaid.status
        });
    }

    async cancelBooking(req, res) {
        const {id} = req.params;
        await booking.findByIdAndUpdate(id, {status : "Cancelada"});
        res.json({
            msg : 'Reserva cancelada con exito'
        });
    }
}

export const bookingsController = new bookingController();