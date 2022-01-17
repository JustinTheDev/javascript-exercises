const findTheOldest = function(people) {
    const oldest = people.sort(function(a,b)
    {
        const currentYear = (new Date()).getFullYear();
        if(a.yearOfDeath == null)
        {
            a.yearOfDeath = currentYear;
        }
        else if(b.yearOfDeath == null)
        {
            b.yearOfDeath = currentYear;
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1:1;
    });
    console.log(people[0]);
    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
