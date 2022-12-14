// return masked string
function maskify(cc) {

    let strLen = cc.length;
    var mask = '#'

    if(strLen >= 5) {
        return mask.repeat(strLen - 4) + cc.slice(strLen - 4);
    }else{
        return cc;
    }
}

module.exports = maskify;