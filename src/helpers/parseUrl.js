function parseUrl(reqUri, uriList, next) {
    if(!uriList || !uriList.length || !reqUri) return 500;
    //splitted request path by slash
    let splittedUriPath = reqUri.split('?')[0].split('/');
    let result = false;
    for(let i = 0; i < uriList.length; i++) {

        let uriListItem = uriList[i].split('/');
        let isMatched = true;

        if(splittedUriPath.length !== uriListItem.length) continue;
        for(let j = 0; j < uriListItem.length; j++) {
            if(splittedUriPath[j] !== uriListItem[j] && uriListItem[j][0] !== ':') {
                isMatched = false;
                break;
            }
        }
        if(isMatched) {
            result = uriList[i];
            break;
        }
    }
    if(!result) return 404;
    return result;
}

module.exports = {
    parseUrl
}

// const arr = [
//     '/api/auth/register',
//     '/api/auth/authorization',
//     '/api/admin/user/deleteUser/:id',
//     '/api/admin/user/createUser/:id/:test'
// ]


// console.log(parseUrl('/api/auth/authorization?foo=bar', arr));
