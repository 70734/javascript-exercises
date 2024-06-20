function getAge(death, birth){
    if(!death){ death = new Date().getFullYear();}
    return death - birth;
};

const findTheOldest = function(people) {
    
    people = people.sort((person1, person2) => 
        {return(getAge(person2.yearOfDeath, person2.yearOfBirth) - getAge(person1.yearOfDeath,person1.yearOfBirth))})
    return people[0];
};
// Do not edit below this line
module.exports = findTheOldest;
