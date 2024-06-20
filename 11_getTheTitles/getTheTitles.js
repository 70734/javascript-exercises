const getTheTitles = function(array) {
    titleArray = []
    array.forEach(element => { titleArray.push(element.title)});
    return titleArray;
};
// Do not edit below this line
module.exports = getTheTitles;