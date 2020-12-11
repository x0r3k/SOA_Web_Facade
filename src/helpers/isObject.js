function isObject(obj) {
    if(typeof obj !== 'object' || obj == null) return false;
    return true;
}

module.exports = {
    isObject
}