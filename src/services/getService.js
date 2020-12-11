const axios = require('axios');

async function getServiceByCode(code) {
    return await axios.get(`http://localhost:${process.env.REGISTER_PORT}/api/registry/getServiceInstance?code=${code}`);
}

module.exports = {
    getServiceByCode
}