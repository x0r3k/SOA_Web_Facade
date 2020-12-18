const axios = require('axios');

module.exports = {
    POST: (service, uri, body, headers) => {
        return axios.post(`${service.url}${uri}`, body, { headers });
    },
    GET: (service, uri, body, headers) => {
        return axios.get(`${service.url}${uri}`, { headers });
    },
    PUT: (service, uri, body, headers) => {
        return axios.put(`${service.url}${uri}`, body, { headers });
    },
    DELETE: (service, uri, body, headers) => {
        return axios.delete(`${service.url}${uri}`, { headers });
    }
}