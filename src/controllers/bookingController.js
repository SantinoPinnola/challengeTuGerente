import { booking } from "../models/booking.models.js";



const tableName = 'booking';

class bookingController {

    checkAddBooking (error, req, res, next) {
        console.log('BODDYYYYYYYY', req.body)
        console.log('PASO POR ACA')
        const {roomDetails, price, daysOfStay, payMethod, clientName, clientId, street, streetNumber, codPostal} = req.body;

        if ( !roomDetails ||  !clientId || 
            !clientName ||  !daysOfStay || 
            typeof clientName !== 'string' || 
            typeof street !== 'string' ||
            typeof payMethod !== 'string' ||
            isNaN(daysOfStay) ||
            isNaN(price) ||
            isNaN(streetNumber) ||
            isNaN(clientId) ||
            isNaN(codPostal)) {   
        return res.status(400).json({
            msg: 'Campos del body invalidos',
            error : error
        });
        } else { next(); };
    }

    checkBookingPay (req, res, next) {
        console.log('PASO POR AC A')
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
        

    async addBooking(req, res) {
        console.log('EL BODY', req.body);
        let bookingDone = await booking.create(req.body);
        res.json({
            msg : 'Reserva creada con exito',
            status : bookingDone.status
        })
    }

    async updateProduct(req, res) {
        const {id} = req.params;
        await booking.findByIdAndUpdate(id, req.body);
        res.json({
            msg : 'Reserva actualizada con exito'
        });
    }

    async delete(req, res) {
        const {id} = req.params;
        await booking.findByIdAndDelete(id);
        res.json({
            msg : 'Reserva borrada con exito'
        });
    }
}

export const bookingsController = new bookingController();