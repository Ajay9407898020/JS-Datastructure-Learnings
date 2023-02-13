const instructor = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumber: [1,2,3,4]
}

// Object.keys()  ==  O(n);
console.log(Object.keys(instructor));

// Object.entries() == O(n)
console.log(Object.entries(instructor));

// Object.hasOwnProperty == O(1)
console.log(instructor.hasOwnProperty('firstName'));