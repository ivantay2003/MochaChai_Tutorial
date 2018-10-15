


module.exports.sum = (a,b) => (a+b );

module.exports.average = (num) => {
    
    let total = 0;
    for (i=0;i<num.length;i++){
        total = total + num[i];
    }
    return total / num.length;

    
    
};
