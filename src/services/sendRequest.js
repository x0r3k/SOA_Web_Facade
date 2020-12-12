const axios = require('axios');

module.exports = {
    POST: async (service, uri, body, headers) => {
        return await axios.post(`${service.url}${uri}`, body, { headers });
    },
    GET: async (service, uri, body, headers) => {
        return await axios.get(`${service.url}${uri}`, { headers });
    },
    PUT: async (service, uri, body, headers) => {
        return await axios.put(`${service.url}${uri}`, body, { headers });
    },
    DELETE: async (service, uri, body, headers) => {
        return await axios.delete(`${service.url}${uri}`, { headers });
    }
}