import {check} from 'express-validator'
import validateResult from '../helpers/validatorHelper.js'

const validatePay = [
    check('roomDetails')
    .custom((value, { req }) => {
        if (value) {
            throw new Error('No se puede modificar la reserva')
        }
        return true
    }),
    check('clientName')
    .custom((value, { req }) => {
        if (value) {
            throw new Error('No se puede modificar la reserva')
        }
        return true
    }),
    check('clientId')
    .custom((value, { req }) => {
        if (value) {
            throw new Error('No se puede modificar la reserva')
        }
        return true
    }),
    check('daysOfStay')
    .custom((value, { req }) => {
        if (value) {
            throw new Error('No se puede modificar la reserva')
        }
        return true
    }),
    check('codPostal')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('street')
    .exists()
    .notEmpty()
    .isLength({ min: 3 }),
    check('payMethod')
    .exists()
    .notEmpty()
    .isLength({ min: 2 }),
    check('streetNumber')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('price')
    .exists()
    .isNumeric()
    .custom((value, { req }) => {
        if (value <= 0 ) {
            throw new Error('El monto debe ser mayor a 0')
        }
        return true
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default validatePay