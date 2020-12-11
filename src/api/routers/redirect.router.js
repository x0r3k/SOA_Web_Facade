const router = require('express').Router();
const { handleWebRequest } = require('../controllers/redirect.controller');
const {
    body_URI,
    body_Method,
    body_Body,
    body_Headers
} = require('../../services/apiValidations');

router.post(
    '/handleWebRequest',
    [
        body_URI(true),
        body_Method(true),
        body_Body(false),
        body_Headers(false)
    ],
    handleWebRequest
);

module.exports = router;