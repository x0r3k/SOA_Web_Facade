const axios = require('axios');

function getServiceByCode(code) {
    return axios.get(`http://localhost:${process.env.REGISTER_PORT}/api/registry/getServiceInstance?code=${code}`);
}

module.exports = {
    getServiceByCode
}