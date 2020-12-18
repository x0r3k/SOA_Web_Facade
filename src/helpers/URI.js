const URI = {
    POST: {
        '/api/admin/user/createUser': 'auth',
        '/api/admin/user/createUser': 'auth',
        '/api/auth/register': 'auth',
        '/api/auth/authorization': 'auth',
        
        '/api/car/addToGarage/:id': 'car',

    },
    GET: {
        '/api/admin/user/getUser/:id': 'auth',
        '/api/admin/user/getUsers': 'auth',
        '/api/auth/checkToken': 'auth',
        '/api/user/getAccountInfo': 'auth',
        '/api/user/updateAccountInfo': 'auth',

        '/api/car/getCars': 'car',
        '/api/car/getCar/:id': 'car',
        '/api/car/getGarageCars': 'car',
        '/api/car/getCarByParams': 'car',

        '/api/category/getCategories': 'product',
        '/api/product/getProducts': 'product',
        '/api/product/getProductById/:id': 'product',
        '/api/product/getProductByCategory/:id': 'product',
        '/api/product/getProductByCategoryCar': 'product',

    },
    PUT: {
        '/api/admin/user/updateUser/:id': 'auth',
        '/api/auth/updateTokens': 'auth',

        '/api/product/changeProductsAmount': 'product',

    },
    DELETE: {
        '/api/admin/user/deleteUser/:id': 'auth',
        '/api/user/deleteAccount': 'auth',

        '/api/car/removeFromGarage/:id': 'car',

    }
};

module.exports = {
    URI
}