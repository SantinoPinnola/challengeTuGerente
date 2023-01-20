import mongoose from "mongoose";

const bookingsCollections = 'bookings';

const bookingsSchema = new mongoose.Schema({
    status : {
        type : String, 
        required : true, 
        default: 'Pendiente'
    },
    roomDetails : {
        type : String,
        required : true,
    },
    clientName : {
        type : String,
        required: true
    },
    daysOfStay : {
        type : Number,
        required : true,
    },
    clientId : {
        type : String,
        required: true
    },
    price : {
        type : Number
    },
    payMethod : {
        type : String
    },
    street : {
        type : String
    },
    streetNumber : {
        type : Number
    },
    codPostal : {
        type : Number
    },
    timestamp : {
        type : Date, 
        default : Date.now()
    }
});

export const booking = mongoose.model(bookingsCollections, bookingsSchema);