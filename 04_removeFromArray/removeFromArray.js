const removeFromArray = function() {
    let values = Array.from(arguments);
    let array = values[0];
    
    delete values[0];

    //loop through the remove values
    for(i = 0; i < values.length; i++)
        {
            let index = array.indexOf(values[i]);
            while(index != -1){ // exit if value not found
                array.splice(index,1);
                index = array.indexOf(values[i]); // find index of item
                
            }
        }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;

