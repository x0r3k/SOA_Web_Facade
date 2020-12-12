const createError = require('http-errors');
const { URI } = require('../../helpers/URI');
const { parseUrl } = require('../../helpers/parseUrl');
const { validationResult } = require('express-validator');
const sendRequest = require('../../services/sendRequest');
const { getServiceByCode } = require('../../services/getService');
const { formErrorObject, MAIN_ERROR_CODES } = require('../../services/errorHandling');

module.exports = {
    handleWebRequest: async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(createError(formErrorObject(MAIN_ERROR_CODES.VALIDATION_BODY, 'Invalid request params', errors.errors)));
            }

            const { uri, method, body, headers } = req.body;
            const methodURIs = Object.keys(URI[method]);
            let result = parseUrl(uri, methodURIs, next);

            if(result === 500) return next(createError(formErrorObject(MAIN_ERROR_CODES.SYSTEM_ERROR, 'Wrong function params')));
            else if(result === 404) return next(createError(formErrorObject(MAIN_ERROR_CODES.ELEMENT_NOT_FOUND, 'API not found')));

            let service = await getServiceByCode(URI[method][result]);
            service = service.data.serviceInstance;

            let serviceResponse = await sendRequest[method](service, uri, body, headers);
            return res.status(200).json(serviceResponse.data);
        } catch (error) {
            if(error.response && error.response.data && error.response.data.code) {
                let errorObj = Object.values(MAIN_ERROR_CODES).find(item => item.ERROR_CODE === error.response.data.code);
                return next(createError(formErrorObject(errorObj, error.response.data.message, error.response.data.details)));
                // return next(createError(formErrorObject({ERROR_CODE: error.response.data.code, HTTP_CODE: error.response.status, MESSAGE: error.response.data.message })));
            }
            return next(createError(formErrorObject(MAIN_ERROR_CODES.SYSTEM_ERROR, 'Something went wrong, please try again')));
        }
    }
}