const sumAll = function(start, stop) {
    if(!Number.isInteger(start) || !Number.isInteger(stop) || start < 0 || stop < 0){return "ERROR";}
    if(start > stop){
        let temp = stop;
        stop = start;
        start = temp;}
    let sum = 0;
    for(i = start; i <= stop; i++){
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
