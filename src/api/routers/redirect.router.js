const router = require('express').Router();
const { } = require('../controllers/redirect.controller');

router.get(
    '/getProducts',
    getProducts
);

module.exports = router;