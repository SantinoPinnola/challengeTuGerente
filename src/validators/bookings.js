import {check} from 'express-validator'
import validateResult from '../helpers/validatorHelper.js'

const validateCreate = [
    check('roomDetails')
    .exists()
    .notEmpty(),
    check('clientName')
    .exists()
    .notEmpty()
    .isLength({ min: 5 }),
    check('clientId')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('daysOfStay')
    .exists()
    .isNumeric()
    .custom((value, { req }) => {
        if (value <= 0 ) {
            throw new Error('Los dias de estadia tienen que ser mayores a 0')
        }
        return true
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default validateCreate