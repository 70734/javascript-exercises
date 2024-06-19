const palindromes = function (string) {
    let array = [...string];
    array = array.filter((char) => char.match(/[A-Za-z0-9]/));
    let reverseArray = [...array];
    reverseArray.reverse();
    if(array.join().toLowerCase() === reverseArray.join().toLowerCase()){return true;}
    else {return false;}
    
};

// Do not edit below this line
module.exports = palindromes;
