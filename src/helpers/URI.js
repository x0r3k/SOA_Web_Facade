const URI = {
    POST: {
        '/api/admin/user/createUser': 'auth',
        '/api/admin/user/createUser': 'auth',
        '/api/auth/register': 'auth',
        '/api/auth/authorization': 'auth',

    },
    GET: {
        '/api/admin/user/getUser/:id': 'auth',
        '/api/admin/user/getUsers': 'auth',
        '/api/auth/checkToken': 'auth',
        '/api/user/getAccountInfo': 'auth',
        '/api/user/updateAccountInfo': 'auth'

    },
    PUT: {
        '/api/admin/user/updateUser/:id': 'auth',
        '/api/auth/updateTokens': 'auth',

    },
    DELETE: {
        '/api/admin/user/deleteUser/:id': 'auth',
        '/api/user/deleteAccount': 'auth',

    }
};

module.exports = {
    URI
}