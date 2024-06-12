const repeatString = function(string, repeatCount) {
    let repeatedString = ''
    if(repeatCount >= 0){
        for(let i = 0; i < repeatCount; i++){
            repeatedString += string;
        }
    }
    else{repeatedString = "ERROR";}
    
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
