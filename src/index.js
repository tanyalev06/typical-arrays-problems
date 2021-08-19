exports.min = function min (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    else {
        var min = Math.min.apply(null, array);
        return (min);
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    else {
        var max = Math.max.apply(null, array);
        return (max);
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0){
        return 0;
    }
    else {
    let sum = 0;
    for (i=0; i< array.length; i++){
      
       sum += array[i];
    }
    return avg=sum/array.length;
}
}
