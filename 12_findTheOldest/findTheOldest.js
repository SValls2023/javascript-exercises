const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        let lastPerson = 0;
        let nextPerson = 0;

        if (Object.hasOwn(a, 'yearOfDeath')) {
            lastPerson = a.yearOfDeath - a.yearOfBirth;
        } else {
            lastPerson = (new Date().getFullYear()) - a.yearOfBirth;
        }

        if (Object.hasOwn(b, 'yearOfDeath')) {
            nextPerson = b.yearOfDeath - b.yearOfBirth;
        } else {
            nextPerson = (new Date().getFullYear()) - b.yearOfBirth;
        }

        return lastPerson > nextPerson ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
