const axios = require('axios');

module.exports = {
    POST: async (service, uri, body, headers) => {

    },
    GET: async (service, uri, body, headers) => {
        return await axios.get(`${service.url}${uri}`, {
            headers
        });
    },
    PUT: async (service, uri, body, headers) => {

    },
    DELETE: async (service, uri, body, headers) => {

    }
}