const quarterOf = (month) => {
    // Your code here
    if (month <= 3){
        return 1;
    }else if (month >= 4 && month <= 6){
        return 2;
    }else if (month >= 7 && month <= 9){
        return 3;
    }else{
        return 4;
    }
}

// const quarterOf = month => Math.ceil(month / 3);

module.exports = quarterOf;