const { query, param, check } = require('express-validator');

const isRequiredParameter = (isRequired, paramName) => {
    return isRequired ? check(paramName).exists().withMessage('Is required').bail() : check(paramName).optional();
}

module.exports = {
    // body_Transaction_PaymentType: (isRequired) => {
    //     return isRequiredParameter(isRequired, 'paymentType').notEmpty().withMessage('Should not be empty').bail()
    //         .isIn(PAYMENT_TYPES).withMessage(`Should be one of values: ${PAYMENT_TYPES}`).bail();
    // },
    // body_Delivery_DeliveryType: (isRequired) => {
    //     return isRequiredParameter(isRequired, 'deliveryType').notEmpty().withMessage('Should not be empty').bail()
    //         .isIn(DELIVERY_TYPES).withMessage(`Should be one of values: ${DELIVERY_TYPES}`).bail();
    // },
    body_Delivery_City: (isRequired) => {
        return isRequiredParameter(isRequired, 'city').notEmpty().withMessage('Should not be empty').bail()
          .isString().withMessage('Should be string')
          .isLength({ max: 50 }).withMessage('Max length is 255 symbols');
    },
    body_Order_Promo: (isRequired) => {
        return isRequiredParameter(isRequired, 'promo').notEmpty().withMessage('Should not be empty').bail()
            .isDecimal().withMessage('Should be an float value').bail();
    }
}