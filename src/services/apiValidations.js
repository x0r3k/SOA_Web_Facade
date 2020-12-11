const { query, param, check } = require('express-validator');
const { HTTP_METHODS } = require('../helpers/constants');
const URI = require('../helpers/URI');
const { isObject } = require('../helpers/isObject');

const isRequiredParameter = (isRequired, paramName) => {
    return isRequired ? check(paramName).exists().withMessage('Is required').bail() : check(paramName).optional();
}

module.exports = {
    body_URI: (isRequired) => {
        return isRequiredParameter(isRequired, 'uri').notEmpty().withMessage('Should not be empty').bail()
          .isString().withMessage('Should be string')
          .isLength({ max: 50 }).withMessage('Max length is 255 symbols');
    },
    body_Method: (isRequired) => {
        return isRequiredParameter(isRequired, 'method').notEmpty().withMessage('Should not be empty').bail()
            .isIn(HTTP_METHODS).withMessage(`Should be one of values: ${HTTP_METHODS}`).bail();
    },
    body_Body: (isRequired) => {
        return isRequiredParameter(isRequired, 'body').notEmpty().withMessage('Should not be empty').bail()
            .custom(value => isObject(value)).withMessage('Should be object');
    },
    body_Headers: (isRequired) => {
        return isRequiredParameter(isRequired, 'headers').notEmpty().withMessage('Should not be empty').bail()
            .custom(value => isObject(value));
    }
}