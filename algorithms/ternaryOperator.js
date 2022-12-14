function saleHotdogs(n){
    return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n *90;
}

// return n*(n<5?100:n<10?95:90);
module.exports = saleHotdogs;